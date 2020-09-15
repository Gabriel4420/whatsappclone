//importação de libs e bibliotecas
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import firebaseConfig from './firebaseConfig';

//conexão com firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// constante de conexão com firebase
const db = firebaseApp.firestore();