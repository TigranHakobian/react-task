import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEQDXVf33CcXgpd0xrGALU37Y85ROT-Ww",
  authDomain: "react-task-e31d3.firebaseapp.com",
  databaseURL: "https://react-task-e31d3-default-rtdb.firebaseio.com",
  projectId: "react-task-e31d3",
  storageBucket: "react-task-e31d3.appspot.com",
  messagingSenderId: "694739522813",
  appId: "1:694739522813:web:730e34ac6c9f9bb9f7da94",
  measurementId: "G-2PK6S47XGS"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();

