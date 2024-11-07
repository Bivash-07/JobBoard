// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE07vpiOgeqs2M0nCBTVR8wnBD3HKtOJA",
  authDomain: "jobportal-d2833.firebaseapp.com",
  projectId: "jobportal-d2833",
  storageBucket: "jobportal-d2833.appspot.com",
  messagingSenderId: "542813832229",
  appId: "1:542813832229:web:07ae2caa1fd19953fb2bcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();


export {db};

export { app, auth };