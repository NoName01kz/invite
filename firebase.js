import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDYRprXsYiXHG0CplJ8hpa6kcTAxQiTjv8",
    authDomain: "starinvite-4fc7f.firebaseapp.com",
    projectId: "starinvite-4fc7f",
    storageBucket: "starinvite-4fc7f.firebasestorage.app",
    messagingSenderId: "747549267202",
    appId: "1:747549267202:web:7432b06f76349101975e1b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export { doc, setDoc, getDoc };
