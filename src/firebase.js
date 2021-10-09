

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBi1n_f9r42O4Lr-4kNN1YWPCnoYZ-XLYY",
    authDomain: "netflix-clone-11fa7.firebaseapp.com",
    projectId: "netflix-clone-11fa7",
    storageBucket: "netflix-clone-11fa7.appspot.com",
    messagingSenderId: "264924337211",
    appId: "1:264924337211:web:b4f3d14db5cd6ead81781e"
};
 const firebaseApp=firebase.initializeApp(firebaseConfig);
 const db=firebaseApp.firestore();
 export const auth=firebase.auth();

export default db