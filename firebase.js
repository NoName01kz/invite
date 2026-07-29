import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";


import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";



const firebaseConfig = {

apiKey: "AIzaSyDYRprXsYiXHG0Cpl8J8hpa6kcTAxQiTjv8",

authDomain: "starinvite-4fc7f.firebaseapp.com",

projectId: "starinvite-4fc7f",

storageBucket: "starinvite-4fc7f.firebasestorage.app",

messagingSenderId: "747549267202",

appId: "1:747549267202:web:7432b06f76349101975e1b"

};



const app = initializeApp(firebaseConfig);



const db = getFirestore(app);


const auth = getAuth(app);



export {

db,

auth,

doc,

setDoc,

getDoc,

serverTimestamp,

signInWithEmailAndPassword,

onAuthStateChanged

};
