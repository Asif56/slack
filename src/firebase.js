import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBKs29gRgn9hFhU5Kl8t_WTNyLHvy8M4UI",
    authDomain: "slack-clone-ece34.firebaseapp.com",
    projectId: "slack-clone-ece34",
    storageBucket: "slack-clone-ece34.appspot.com",
    messagingSenderId: "56487654053",
    appId: "1:56487654053:web:60afa419dc39528a7d534c",
    measurementId: "G-2HSHJLBBKE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
  export {auth,provider};
  export default db;