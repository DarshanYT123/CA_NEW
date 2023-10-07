import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyCdjAyEP91HuVy6cqNhy0RTKbs5EsDU9Yk",
    authDomain: "react-contact-34d0f.firebaseapp.com",
    projectId: "react-contact-34d0f",
    storageBucket: "react-contact-34d0f.appspot.com",
    messagingSenderId: "728801071115",
    appId: "1:728801071115:web:2b2a7eeb3343ac5fe3770e",
    measurementId: "G-8T0WZXQLCS"
  };

  const fireDb = firebase.initializeApp(firebaseConfig)
  export default fireDb.database().ref();