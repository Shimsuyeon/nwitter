import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_MESSAGE_ID,
    appId: process.env.REACT_APP_APP_ID,
};

//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();