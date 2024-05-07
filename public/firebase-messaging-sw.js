importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
// import "dotenv/config";


firebase.initializeApp({
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID
});

const messaging = firebase.messaging();