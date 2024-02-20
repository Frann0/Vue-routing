// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-RinWyjMJ3bVGSlW7A4AB50WLCvm1nmM',
  authDomain: 'vue-routing-5b2c7.firebaseapp.com',
  projectId: 'vue-routing-5b2c7',
  storageBucket: 'vue-routing-5b2c7.appspot.com',
  messagingSenderId: '736066954930',
  appId: '1:736066954930:web:a4475eb04393fc14da4bab',
  measurementId: 'G-QHB364ZR28'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
