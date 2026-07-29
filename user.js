import {
    db,
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "./firebase.js";


// Создание уникального ID пользователя
function generateUserId(){

    return "user_" + 
    Math.random().toString(36).substring(2,10);

}


// Получить ID пользователя
export function getUserId(){

    let id = localStorage.getItem("userId");


    if(!id){

        id = generateUserId();

        localStorage.setItem("userId", id);

    }


    return id;

}



// Создать пользователя в Firestore
export async function createUser(){


    const id = getUserId();


    const userRef = doc(db,"users",id);


    const snap = await getDoc(userRef);



    if(!snap.exists()){


        await setDoc(userRef,{

            completed:false,

            inviteOpened:false,

            answers:{},

            createdAt:serverTimestamp(),

            lastVisit:serverTimestamp()

        });


        console.log("Создан новый пользователь:",id);


    }
    else{


        await setDoc(userRef,{

            lastVisit:serverTimestamp()


        },{merge:true});


        console.log("Пользователь найден:",id);


    }


    return id;


}




// Получить данные пользователя
export async function loadUser(){


    const id = getUserId();


    const userRef = doc(db,"users",id);


    const snap = await getDoc(userRef);



    if(!snap.exists()) return null;



    return snap.data();


}

export async function updateUser(data){

    const id = getUserId();

    const userRef = doc(db,"users",id);

    await setDoc(userRef,data,{merge:true});

}

// Сохранить выбранную дату и время
export async function saveDateToUser(dateData){

    const id = getUserId();

    const userRef = doc(db,"users",id);


    await setDoc(userRef,{

        selectedDate: dateData.date,

        selectedTime: dateData.time,

        lastVisit: serverTimestamp()

    },{merge:true});


    console.log("Дата сохранена:", dateData);

}
