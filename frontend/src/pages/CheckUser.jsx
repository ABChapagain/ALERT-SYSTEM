import React from "react";
import SuchanaContext from "../context/SuchanaContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { messaging } from "../firebase";
import { getToken } from "firebase/messaging";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CheckUser() {
  var navigate = useNavigate();

  const { checkCurrentUser, currentUser } = useContext(SuchanaContext);

  var { user, isAuthenticated } = useAuth0();
  // var [token, setToken] = useState();
  let token;

  async function requestPermission() {
    console.log("Requesting permission...");
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      getToken(messaging, {
        vapidKey:
          "BPqsnwNI05Ncrsmt7dh_7KwrRBPgvOvUtzKGKb2YhLrJHLr-zWyO76EqzXHb5lr60LtlfDNHN6RSh0nsS7H3EaQ",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
            console.log(user.email);
            axios.put(`${origin}/api/users/updateToken/${user.email}`, {
              token: currentToken,
            });
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });

      console.log("Notification permission granted.");
    } else if (permission === "denied") {
      console.log("Denied permission");
    }
  }

  useEffect(() => {}, []);

  function sendData() {
    fetch("api/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        username: user.nickname,
        image: user.picture,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        //sending data to context
        checkCurrentUser(data);
        if (data.phone) {
          requestPermission();

          navigate("/");

          console.log("verified");
        } else navigate("/auth/phone");
      });
  }

  useEffect(() => {
    if (user) {
      sendData();
    }
  }, [user]);

  return (
    <div>
      <h1>Checking</h1>
    </div>
  );
}

export default CheckUser;
