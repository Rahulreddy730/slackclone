// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsfzy-x-Zae50kqe8b4PnYnfCQqSio5hA",
    authDomain: "slack-clone-14e51.firebaseapp.com",
    databaseURL: "https://slack-clone-14e51.firebaseio.com",
    projectId: "slack-clone-14e51",
    storageBucket: "slack-clone-14e51.appspot.com",
    messagingSenderId: "422815037837",
    appId: "1:422815037837:web:ee2e7cfeaa03473f1625c4",
    measurementId: "G-DFXSY7KS0B"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 const auth = firebase.auth();

 const provider = new firebase.auth.GoogleAuthProvider();

 export {auth, provider};
 export default db;