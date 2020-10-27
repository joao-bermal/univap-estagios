import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyD0UHW_KP6uLGf9M-8PWj2J0X0wyDpwvEI",
  authDomain: "estagios-5ff5e.firebaseapp.com",
  databaseURL: "https://estagios-5ff5e.firebaseio.com",
  projectId: "estagios-5ff5e",
  storageBucket: "estagios-5ff5e.appspot.com",
  messagingSenderId: "295405462090",
  appId: "1:295405462090:web:e633a5cf879443ea1dbcb3",
  measurementId: "G-DKRGGJ0Y1M"
};

if(!firebase.apps.lenght){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
