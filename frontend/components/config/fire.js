import firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyCP-EjmMT_X7izYqnqN2UgGqJFpb-wOoKM",
    authDomain: "lab9-flightlogs.firebaseapp.com",
    databaseURL: "https://lab9-flightlogs.firebaseio.com",
    projectId: "lab9-flightlogs",
    storageBucket: "lab9-flightlogs.appspot.com",
    messagingSenderId: "491408929287"
  };
const fire= firebase.initializeApp(config);
const facebook= new firebase.auth.FacebookAuthProvider();
const email= new firebase.auth.EmailAuthProvider();
const google= new firebase.auth.GoogleAuthProvider();
export {fire, base, facebook, email,google};
