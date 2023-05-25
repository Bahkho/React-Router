import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBvSriWjKZZ39p8NIF9gLz6bRX1907MjvY",
  authDomain: "routing-3bfd2.firebaseapp.com",
  projectId: "routing-3bfd2",
  storageBucket: "routing-3bfd2.appspot.com",
  messagingSenderId: "674607382347",
  appId: "1:674607382347:web:975304a561aa0555ae72ce",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
