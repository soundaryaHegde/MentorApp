import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBNcnpI92IYI5gRm1TRYdD6NKUZ6CfgTz4",
    authDomain: "dogcare-71f05.firebaseapp.com",
    projectId: "dogcare-71f05",
    storageBucket: "dogcare-71f05.appspot.com",
    messagingSenderId: "456665232591",
    appId: "1:456665232591:web:e365b2bae54232ad30b3ba"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
