import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDr4qC27foDzt0QWIOUfqVg7m7fx8ps2W0",
  authDomain: "hackathon-385312.firebaseapp.com",
  projectId: "hackathon-385312",
  storageBucket: "hackathon-385312.appspot.com",
  messagingSenderId: "916386905537",
  appId: "1:916386905537:web:f2c0501b0c844dfd438340",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export { app, messaging };
