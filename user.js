import {
    db,
    auth,
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


// Получить текущего пользователя

export function getCurrentUser(){

    return new Promise((resolve)=>{


        onAuthStateChanged(auth,(user)=>{


            resolve(user);


        });


    });

}



// Создать профиль пользователя

export async function createUser(){


    const user = await getCurrentUser();


    if(!user){

        console.log("Пользователь не авторизован");

        return null;

    }



    const userRef = doc(
        db,
        "users",
        user.uid
    );



    const snap = await getDoc(userRef);



    if(!snap.exists()){


        await setDoc(userRef,{


            email:user.email,


            completed:false,


            inviteOpened:false,


            answers:{},


            createdAt:serverTimestamp(),


            lastVisit:serverTimestamp()


        });



        console.log(
            "Создан пользователь:",
            user.uid
        );


    }
    else{


        await setDoc(userRef,{


            lastVisit:serverTimestamp()


        },{

            merge:true

        });



    }



    return user.uid;


}



// Получить данные пользователя

export async function loadUser(){


    const user = await getCurrentUser();


    if(!user){

        return null;

    }



    const userRef = doc(

        db,

        "users",

        user.uid

    );



    const snap = await getDoc(userRef);



    if(!snap.exists()){

        return null;

    }



    return snap.data();


}



// Обновить данные

export async function updateUser(data){


    const user = await getCurrentUser();



    if(!user){

        return;

    }



    const userRef = doc(

        db,

        "users",

        user.uid

    );



    await setDoc(

        userRef,

        data,

        {

            merge:true

        }

    );


}



// Сохранение даты

export async function saveDateToUser(data){


    await updateUser({


        selectedDate:data.date,


        selectedTime:data.time,


        lastVisit:serverTimestamp()


    });


}
