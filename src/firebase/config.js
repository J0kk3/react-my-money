import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA-LZEe2tKOKlB_oh9--OwtJdLzU472EeU",
    authDomain: "mymoney-85928.firebaseapp.com",
    projectId: "mymoney-85928",
    storageBucket: "mymoney-85928.appspot.com",
    messagingSenderId: "391844684841",
    appId: "1:391844684841:web:9627b039337cd26fd1a838"
};

// Init firebase
firebase.initializeApp( firebaseConfig );

// Init Service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };