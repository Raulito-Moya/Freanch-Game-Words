import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyB1pw9D1mDWunfeVyZ_uZydbE1lULIsj9A",
    authDomain: "freanch-words.firebaseapp.com",
    projectId: "freanch-words",
    storageBucket: "freanch-words.appspot.com",
    messagingSenderId: "274949240133",
    appId: "1:274949240133:web:fd65692b8a9b4e2dbbba2c",
    measurementId: "G-QHRZD70K8Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }