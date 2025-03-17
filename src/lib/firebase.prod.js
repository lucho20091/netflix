import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCMFZ3U7V8ZCaPB1m83rnQoHljUb1aJsU4",
  authDomain: "netflix-b58cc.firebaseapp.com",
  projectId: "netflix-b58cc",
  storageBucket: "netflix-b58cc.firebasestorage.app",
  messagingSenderId: "117970729305",
  appId: "1:117970729305:web:d393f298b1bce56d933448"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
