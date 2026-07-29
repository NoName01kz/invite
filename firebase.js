// Firebase App
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";


// Firestore
import {

    getFirestore,
    doc,
    setDoc,
    getDoc,
    serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";


// Authentication
import {

    getAuth

} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";



// Конфигурация Firebase

const firebaseConfig = {

    apiKey: "AIzaSyDYRprXsYiXHG0CplJ8hpa6kcTAxQiTjv8",

    authDomain: "starinvite-4fc7f.firebaseapp.com",

    projectId: "starinvite-4fc7f",

    storageBucket: "starinvite-4fc7f.firebasestorage.app",

    messagingSenderId: "747549267202",

    appId: "1:747549267202:web:7432b06f76349101975e1b"

};



// Запуск Firebase

const app = initializeApp(firebaseConfig);



// База данных

const db = getFirestore(app);



// Авторизация

const auth = getAuth(app);



// Экспорт

export {

    db,

    auth,

    doc,

    setDoc,

    getDoc,

    serverTimestamp

};
