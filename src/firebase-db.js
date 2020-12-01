import firebase from "firebase";
import {firebaseConfig} from './configs/firebase'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };