
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD05QAb-frUyUT0mXjKnfGRkbli59yXjds",
  authDomain: "olx-clone-62906.firebaseapp.com",
  projectId: "olx-clone-62906",
  storageBucket: "olx-clone-62906.appspot.com",
  messagingSenderId: "456648961683",
  appId: "1:456648961683:web:a4a4e32deb3876f8a02766"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()