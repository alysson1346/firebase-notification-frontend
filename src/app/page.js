"use client"

import styles from "./page.module.css";
import ClientButton from "@/components/ClientButton";
import registerServiceWorker from '../registerServiceWorker';
import firebase from 'firebase/compat/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import "dotenv/config";


const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID
};

export const initializeFirebase = () => {

  try {
     firebase.initializeApp(firebaseConfig);
      console.log('Firebase inicializado com sucesso!');
    
  } catch (error) {
    console.error('Erro ao inicializar o Firebase:', error);
  }
}

const messaging = getMessaging(firebase.initializeApp(firebaseConfig))

export const askForPermissioToReceiveNotifications = async () => {
  console.log('clicou')
  try {
    if (typeof navigator !== 'undefined' && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // Obtenha o token de registro do dispositivo
        const token = await getToken(messaging, { vapidKey: 'BAbRAtwa2teNfBpadCWI0fwiNuOK-R2-yTIzgHQ20ES-HksOAr5V0J3oDp9sMaMMbynrUgBT0BDjQunNEy_8esE' });
        console.log('Token:', token);
      } else {
        console.log('Unable to get permission to notify.');
      }
    } else {
      console.log('Notifications not supported or navigator object not available.');
    }
  } catch (error) {
    console.error('Error requesting permission:', error);
  }
};


onMessage(messaging, (payload) => {
  console.log('Message received. Payload:', payload);
});


import { useEffect } from "react";

export default function Home() {
  
  useEffect(()=>{
    registerServiceWorker()
    initializeFirebase(); 
  },[])
  
  
  return (
    <main className={styles.main}>
      <ClientButton onClick={askForPermissioToReceiveNotifications}>aceitar notificação</ClientButton>
    </main>
  );
}
