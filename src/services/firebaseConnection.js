import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBTxx3eh46PVONbgn3rpLQr4asLl_FP_h4",
    authDomain: "tarefas-2a069.firebaseapp.com",
    projectId: "tarefas-2a069",
    storageBucket: "tarefas-2a069.appspot.com",
    messagingSenderId: "1079126632897",
    appId: "1:1079126632897:web:574760189de386f5252740"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

  export default firebase;