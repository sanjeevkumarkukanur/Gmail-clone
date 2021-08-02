import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsjWzzKnm2dGcgUwPPyTyt5xpfaVLfVnA",
    authDomain: "clone-8559d.firebaseapp.com",
    projectId: "clone-8559d",
    storageBucket: "clone-8559d.appspot.com",
    messagingSenderId: "737855060231",
    appId: "1:737855060231:web:41bb6689b5e51f77406da2",
    measurementId: "G-DRQNZS2H2M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore();
  const auth =firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider };