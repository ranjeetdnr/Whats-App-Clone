

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDj5ygj3-ipzKl1IW3nfVb1o88Ebl41gg",
  authDomain: "whatsapp-clone-bf5ca.firebaseapp.com",
  projectId: "whatsapp-clone-bf5ca",
  storageBucket: "whatsapp-clone-bf5ca.appspot.com",
  messagingSenderId: "1027822563096",
  appId: "1:1027822563096:web:0b03d246af43759ef3786d",
  measurementId: "G-QTSCQX8SZL"
};

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth, googleProvider}

  export default db;
