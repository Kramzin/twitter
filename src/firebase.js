import firebase from "firebase";
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDXZO5YupeJbju73X5SEfVcugtN1vRUqQg",
    authDomain: "impax-5c8de.firebaseapp.com",
    databaseURL: "https://impax-5c8de-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "impax-5c8de",
    storageBucket: "impax-5c8de.appspot.com",
    messagingSenderId: "934652517324",
    appId: "1:934652517324:web:962c99ad391e2ce920db69",
    measurementId: "G-K5RB5V8Z90"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

 export default db;