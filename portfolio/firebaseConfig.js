// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_api_key,
  authDomain: process.env.NEXT_PUBLIC_auth_domain,
  projectId: process.env.NEXT_PUBLIC_proj_id,
  storageBucket: process.env.NEXT_PUBLIC_storage_bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messaging_sender_id,
  appId: process.env.NEXT_PUBLIC_app_id,
  measurementId: process.env.NEXT_PUBLIC_measurement_id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
