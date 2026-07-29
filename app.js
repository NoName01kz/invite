import {
    db,
    doc,
    getDoc
} from "./firebase.js";

console.log("Firebase подключён!");

window.db = db;
window.doc = doc;
window.getDoc = getDoc;
