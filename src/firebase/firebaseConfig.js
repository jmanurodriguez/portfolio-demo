// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "portfolio-demo.firebaseapp.com",
  projectId: "portfolio-demo",
  storageBucket: "portfolio-demo.appspot.com",
  messagingSenderId: "tu-messaging-id",
  appId: "tu-app-id"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
