import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import { getFirestore, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfTpIkg7cZ7_C7fxoQyP_XaO04tsmFak4",
    authDomain: "react-native-1c631.firebaseapp.com",
    projectId: "react-native-1c631",
    storageBucket: "react-native-1c631.appspot.com",
    messagingSenderId: "724202698264",
    appId: "1:724202698264:web:df62ab95586a1475dab56d"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);