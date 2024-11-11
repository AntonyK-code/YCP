// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDRTl-QNBnYl34C0A7AxyKvFTnKoruJmK8", // replace with your actual API key
    authDomain: "youth-connect-platform.firebaseapp.com", // replace with your actual auth domain
    projectId: "youth-connect-platform",
    storageBucket: "youth-connect-platform.appspot.com", // replace with your actual storage bucket
    messagingSenderId: "488978596084", // replace with your actual messaging sender ID
    appId: "1:488978596084:web:your-app-id" // replace with your actual app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
export { auth };
