import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDy4dB1aOsbFB_0XsNyMnlzhgowZ2ewsxc",
    authDomain: "fabri-7aa57.firebaseapp.com",
    databaseURL: "https://fabri-7aa57-default-rtdb.firebaseio.com",
    projectId: "fabri-7aa57",
    storageBucket: "fabri-7aa57.appspot.com",
    messagingSenderId: "845300446553",
    appId: "1:845300446553:web:73fc20fc938153dd690848",
    measurementId: "G-Y491G2BY5E"
  };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig); 

  //const dataBase = firebase.firestore() 
  const dataBase = firebase.firestore() 

  //const googleAuthProvider = new firebase.auth.GoogleAuthProvider() 
  const google = new firebase.auth.GoogleAuthProvider()

  export{
    dataBase, 
    google, 
    firebase
  }