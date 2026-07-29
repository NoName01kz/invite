import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDYRprXsYiXHG0CplJ8hpa6kcTAxQiTjv8",
    authDomain: "starinvite-4fc7f.firebaseapp.com",
    projectId: "starinvite-4fc7f",
    storageBucket: "starinvite-4fc7f.firebasestorage.app",
    messagingSenderId: "747549267202",
    appId: "1:747549267202:web:7432b06f76349101975e1b"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);

// Экспорт
export {
    db,
    auth,

    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp,

    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};
