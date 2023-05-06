import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Phone = () => {
  var { user } = useAuth0();
  var navigate = useNavigate();
  var [phone, setPhone] = useState("");

  function isValidPhoneNumber() {
    var phone = document.getElementById("phone");
    const phoneRegex = /^\d{10}$/;
    var res = phoneRegex.test(phone.value);
    console.log(res);
    if (res) {
      savePhone(phone.value);
      setPhone(phone.value);
      phone.style.border = "1px solid #ccc";
    } else {
      phone.style.border = "1px solid red";
    }
  }

  function goHome() {
    navigate("/");
  }

  function savePhone(phone) {
    if (!user) {
      alert("Please Login First");
      navigate("/auth");
      return;
    }
    var email = user?.email;
    fetch(`${process.env.REACT_APP_ORIGIN}/api/users/updatePhone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phone, email: user.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success")
          document.getElementById("modelButton").click();
        else alert("Error Occured");
      });
  }

  return (
    <div className="hero min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body grid gap-5">
          <h2 className="card-title">Phone Number Required!!</h2>
          <input
            type="text"
            id="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />

          <button
            className="btn flex gap-3 btn-primary"
            onClick={() => isValidPhoneNumber()}
          >
            Submit
          </button>
        </div>
      </div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn" id="modelButton">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Phone Number Updated</h3>
          <p className="py-4">
            Your Phone Number {phone} has been saved, now you can use our
            service
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn"
              onClick={() => goHome()}
            >
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
