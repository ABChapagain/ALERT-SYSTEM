importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDr4qC27foDzt0QWIOUfqVg7m7fx8ps2W0",
  authDomain: "hackathon-385312.firebaseapp.com",
  projectId: "hackathon-385312",
  storageBucket: "hackathon-385312.appspot.com",
  messagingSenderId: "916386905537",
  appId: "1:916386905537:web:f2c0501b0c844dfd438340",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
