import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8G7ZETbHAZ8R8wZVqqC95LqMqhC-DpG0",
  authDomain: "habbittracker-b4f8b.firebaseapp.com",
  projectId: "habbittracker-b4f8b",
  storageBucket: "habbittracker-b4f8b.firebasestorage.app",
  messagingSenderId: "1065474013232",
  appId: "1:1065474013232:web:0f8561df9c23129bf195f5",
  measurementId: "G-5TEH8CG9F5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, collection, addDoc, getDocs, deleteDoc, doc, analytics };