import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAwGRzWIa1lERyHaVywnnWEYjv-AMWWDMs",
  authDomain: "project72n1.firebaseapp.com",
  databaseURL: "https://project72n1.firebaseio.com",
  projectId: "project72n1",
  storageBucket: "project72n1.appspot.com",
  messagingSenderId: "58381585158",
  appId: "1:58381585158:web:4896c346e86dda55342c87"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
