import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCHNWyrzuENs5YuE5Nmn0BISxtIJI7J2RU",
    authDomain: "ancarle-4d58a.firebaseapp.com",
    projectId: "ancarle-4d58a",
    storageBucket: "ancarle-4d58a.appspot.com",
    messagingSenderId: "577269459931",
    appId: "1:577269459931:web:d2588596351e7d241c15fe",
    measurementId: "G-NM6G1NGT7Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db
}