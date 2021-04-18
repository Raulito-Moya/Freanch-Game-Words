import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'



const firebaseConfig = {
    apiKey: "AIzaSyB1pw9D1mDWunfeVyZ_uZydbE1lULIsj9A",
    authDomain: "freanch-words.firebaseapp.com",
    projectId: "freanch-words",
    storageBucket: "freanch-words.appspot.com",
    messagingSenderId: "274949240133",
    appId: "1:274949240133:web:fd65692b8a9b4e2dbbba2c",
    measurementId: "G-QHRZD70K8Y",
    databaseUrl: "https://freanch-words-default-rtdb.firebaseio.com/"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();  esto no se para que es tengo que investigar

  const db = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();




   //esto lo voy a pooner en un efecto , ya que busca cuando se actualiza un elemento
   const hearWords = () => {
     const starCountRef = db.ref('Words')
       
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
     
    });

   }
 
 

  
  
  
  

 //actualizar en la database

 const writeNewPost = () => {

    var newPostKey = firebase.database().ref().child('ejemplo').push().key;
 
    const postData = 'hihi'

    var updates = {};
    updates['/ejemplo/ej'] = postData;


    return firebase.database().ref().update(updates);
 }
 //writeNewPost()
 
//remove para borrar datos


 //TODO: en el reducerWord crear acciones para manejar lo que se reciba y /
 // lo que se va a enviar la base de datos  



  export {
      db,
      googleAuthProvider,
      firebase
  }