import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6fgRyuRcUcTh3DsNxerQmzg3Mm_WuAiI",
    authDomain: "a-clone-4f5a0.firebaseapp.com",
    databaseURL: "https://a-clone-4f5a0.firebaseio.com",
    projectId: "a-clone-4f5a0",
    storageBucket: "a-clone-4f5a0.appspot.com",
    messagingSenderId: "1027529851337",
    appId: "1:1027529851337:web:8fc2543531540c622f6818",
    measurementId: "G-WCEM3W9PN4"
});

const auth = firebase.auth();

export { auth };