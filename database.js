import {
    db,
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "./firebase.js";

const DOC = doc(db, "invitation", "main");

// Создать документ при первом запуске
export async function createInvitation() {

    const snap = await getDoc(DOC);

    if (!snap.exists()) {

        await setDoc(DOC, {

            completed: false,

            inviteOpened: false,

            selectedDate: null,

            answers: {},

            createdAt: serverTimestamp(),

            lastVisit: serverTimestamp()

        });

    }

}

// Получить все данные
export async function loadInvitation() {

    const snap = await getDoc(DOC);

    if (!snap.exists()) return null;

    return snap.data();

}
