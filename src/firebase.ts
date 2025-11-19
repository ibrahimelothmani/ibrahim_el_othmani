import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCkCtaJalbAfPQEN24csLHASeZnEiFIVPQ",
  authDomain: "portfolioibrahim-be5a8.firebaseapp.com",
  projectId: "portfolioibrahim-be5a8",
  storageBucket: "portfolioibrahim-be5a8.firebasestorage.app",
  messagingSenderId: "946231160452",
  appId: "1:946231160452:web:01fe57f61973596444dcd1",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
