import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpQS1QE6Bt_TwYe8y6-z853rG1P8oAjQc",
    authDomain: "restaurant-react-b5a2a.firebaseapp.com",
    projectId: "restaurant-react-b5a2a",
    storageBucket: "restaurant-react-b5a2a.appspot.com",
    messagingSenderId: "19687650743",
    appId: "1:19687650743:web:048c2447e4862785c7e432",
    measurementId: "G-NH0XBCY8R4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export { db }