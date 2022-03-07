import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

export const firebaseConfig = {
    apiKey: 'AIzaSyCGJ0Xi-tIc2Vldbz2t5ktdYu40jjXR6i0',
    authDomain: 'crown-database-4756a.firebaseapp.com',
    projectId: 'crown-database-4756a',
    storageBucket: 'crown-database-4756a.appspot.com',
    messagingSenderId: '586951958286',
    appId: '1:586951958286:web:afa1af68e7802338a0c15f',
    measurementId: 'G-LC4XNSLG1X',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
