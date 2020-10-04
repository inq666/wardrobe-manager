import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBBq5JE8q1dhalCwg360q38RjmXiiEPU5k",
  authDomain: "wardrobe-manager-6dca3.firebaseapp.com",
  databaseURL: "https://wardrobe-manager-6dca3.firebaseio.com",
  projectId: "wardrobe-manager-6dca3",
  storageBucket: "wardrobe-manager-6dca3.appspot.com",
  messagingSenderId: "777122963846",
  appId: "1:777122963846:web:bb8ee93b532c8ab4250c07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;

