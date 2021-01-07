import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCvi6sSaHifFkd5KPMJdVKZRyjK1I_8POI",
    authDomain: "clone-b30aa.firebaseapp.com",
    projectId: "clone-b30aa",
    storageBucket: "clone-b30aa.appspot.com",
    messagingSenderId: "291146060958",
    appId: "1:291146060958:web:955358045c0fcc7bdf578f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }