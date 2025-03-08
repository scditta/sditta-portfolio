// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_api_key || process.env.API_KEY,
  authDomain: process.env.NEXT_PUBLIC_auth_domain || process.env.AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_proj_id || process.env.PROJECT_ID,
  storageBucket:
    process.env.NEXT_PUBLIC_storage_bucket || process.env.STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_messaging_sender_id ||
    process.env.MESSAGINS_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_app_id || process.env.APP_ID,
  measurementId:
    process.env.NEXT_PUBLIC_measurement_id || process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
