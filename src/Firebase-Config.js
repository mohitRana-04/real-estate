import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCtFXCN-cGtLdCqbAAve4CgHtsY3rSOl2M",
  authDomain: "real-estate-729d6.firebaseapp.com",
  projectId: "real-estate-729d6",
  storageBucket: "real-estate-729d6.appspot.com",
  messagingSenderId: "451845180179",
  appId: "1:451845180179:web:ca34e5af49b188d15ea8e6",
  measurementId: "G-0TBMSD276D",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
