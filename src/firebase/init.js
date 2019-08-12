import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBvEUMZIzhk_uijG5PEi_9e93ZV1EsBTPM",
    authDomain: "geo-ninjas-8002c.firebaseapp.com",
    databaseURL: "https://geo-ninjas-8002c.firebaseio.com",
    projectId: "geo-ninjas-8002c",
    storageBucket: "geo-ninjas-8002c.appspot.com",
    messagingSenderId: "545902479451",
    appId: "1:545902479451:web:7be64c8fc46a6656"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()