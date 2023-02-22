import { initializeApp } from "firebase/app";
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZsjmToDeFAjBdr5sT0hBiDFi_jk_67m4",
    authDomain: "ecommerce-3641e.firebaseapp.com",
    databaseURL: "https://ecommerce-3641e-default-rtdb.firebaseio.com",
    projectId: "ecommerce-3641e",
    storageBucket: "ecommerce-3641e.appspot.com",
    messagingSenderId: "876904581490",
    appId: "1:876904581490:web:8bfbf050b81cf1a817b5eb",
    measurementId: "G-G3JZ31Y2RZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app;