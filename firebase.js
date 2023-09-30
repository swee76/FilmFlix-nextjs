import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD4QuDZk1NKH00NxsxyTo_PA_oEkCb8iCA",
    authDomain: "filmflix-nextjs-e0bd1.firebaseapp.com",
    projectId: "filmflix-nextjs-e0bd1",
    storageBucket: "filmflix-nextjs-e0bd1.appspot.com",
    messagingSenderId: "640373724445",
    appId: "1:640373724445:web:d2bb8235e650979f09fdf4",
    measurementId: "G-S2EMY95PTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth();
export const FirebaseStorage = getStorage(app);
export const FirebaseDatabase = getDatabase(app);