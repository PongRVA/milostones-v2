import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwaplEeiCjIvYqCM_ehCD9gqTjt5kV2K4",
  authDomain: "react-notes-3578e.firebaseapp.com",
  projectId: "react-notes-3578e",
  storageBucket: "react-notes-3578e.appspot.com",
  messagingSenderId: "825588562495",
  appId: "1:825588562495:web:86453d4ebcb6a3baed168a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const commentsCollection = collection(db, "theComments");
