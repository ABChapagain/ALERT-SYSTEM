importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

const firebaseConfig = {
  apiKey: 'AIzaSyBEpa5FalUuZpEiUOXIuynHi13e2d1HkCM',
  authDomain: 'hackathon-7f039.firebaseapp.com',
  projectId: 'hackathon-7f039',
  storageBucket: 'hackathon-7f039.appspot.com',
  messagingSenderId: '316875163762',
  appId: '1:316875163762:web:5f6daf5645a786da1e5aeb',
  measurementId: 'G-2YRC8M6Y3K',
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
