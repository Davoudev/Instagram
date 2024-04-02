import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBABKlyLJ5e01OCGij1b1xMbXuMIpIvjqc",
  authDomain: "insta-clone-77098.firebaseapp.com",
  projectId: "insta-clone-77098",
  storageBucket: "insta-clone-77098.appspot.com",
  messagingSenderId: "526345915154",
  appId: "1:526345915154:web:382cc6d906b1060a6f01cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
