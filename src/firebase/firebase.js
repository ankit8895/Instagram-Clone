import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDrAwDXAn6mSedJXehXWDjATitkwFwVvcI',
  authDomain: 'insta-clone-mernstack.firebaseapp.com',
  projectId: 'insta-clone-mernstack',
  storageBucket: 'insta-clone-mernstack.appspot.com',
  messagingSenderId: '209393182633',
  appId: '1:209393182633:web:d05022eaab60788d4386b8',
  measurementId: 'G-4LW6281T41',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
