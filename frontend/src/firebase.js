import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyBEpa5FalUuZpEiUOXIuynHi13e2d1HkCM',
  authDomain: 'hackathon-7f039.firebaseapp.com',
  projectId: 'hackathon-7f039',
  storageBucket: 'hackathon-7f039.appspot.com',
  messagingSenderId: '316875163762',
  appId: '1:316875163762:web:5f6daf5645a786da1e5aeb',
  measurementId: 'G-2YRC8M6Y3K',
}

const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app)

export { app, messaging }
