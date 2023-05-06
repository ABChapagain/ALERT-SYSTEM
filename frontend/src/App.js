// import logo from './logo.png'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Phone from "./pages/Phone";

// Admin import
import AdminAlerts from "./pages/admin/AdminAlerts";
import AdminUsers from "./pages/admin/AdminUsers";
import UserEdit from "./pages/admin/UserEdit";

//context import
import { SuchanaContextProvider } from "./context/SuchanaContext";
import AlertView from "./pages/admin/AlertView";
import CheckUser from "./pages/CheckUser";
import AdminMessages from "./pages/admin/AdminMessages";
import MessageCreate from "./pages/admin/MessageCreate";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  //firebase authentication

  const [token, setToken] = useState("");

  // async function requestPermission() {
  //   console.log("Requesting permission...");
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     getToken(messaging, {
  //       vapidKey:
  //         "BPqsnwNI05Ncrsmt7dh_7KwrRBPgvOvUtzKGKb2YhLrJHLr-zWyO76EqzXHb5lr60LtlfDNHN6RSh0nsS7H3EaQ",
  //     })
  //       .then((currentToken) => {
  //         if (currentToken) {
  //           setToken(currentToken);
  //         } else {
  //           console.log(
  //             "No registration token available. Request permission to generate one."
  //           );
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("An error occurred while retrieving token. ", err);
  //       });

  //     console.log("Notification permission granted.");
  //   } else if (permission === "denied") {
  //     console.log("Denied permission");
  //   }
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  //

  return (
    <Router>
      <SuchanaContextProvider>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/auth/phone" element={<Phone />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/check" element={<CheckUser token={token} />} />

            <Route path="/admin/alerts" element={<AdminAlerts />} />
            <Route path="/admin/alerts/:id" element={<AlertView />} />

            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/users/:id" element={<UserEdit />} />
            <Route path="/admin/users/:id/edit" element={<UserEdit />} />

            <Route path="/admin/messages" element={<AdminMessages />} />
            <Route path="/admin/messages/create" element={<MessageCreate />} />
          </Routes>
        </main>
        <Footer />
      </SuchanaContextProvider>
    </Router>
  );
}

export default App;
