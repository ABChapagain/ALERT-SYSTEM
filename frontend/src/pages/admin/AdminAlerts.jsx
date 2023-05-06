import React from "react";
import { FiEye, FiCheck, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import SuchanaContext from "../../context/SuchanaContext";

const AdminAlert = () => {
  const { fetchAlerts, alerts } = useContext(SuchanaContext);

  useEffect(() => {
    fetchAlerts();
  }, []);

  console.log(alerts);

  return (
    <div className="container mx-auto mt-10 min-h-screen">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>User</th>
              <th>User's Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {alerts &&
              alerts.map((alert) => (
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>
                    <Link
                      to={`/admin/alerts/id`}
                      className="btn btn-ghost mr-2"
                    >
                      <FiEye />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAlert;
