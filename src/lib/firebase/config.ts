import { initializeApp, getApps } from 'firebase/app';
import { getAuth, browserLocalPersistence, setPersistence, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence, connectFirestoreEmulator } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCLOx6MRFvat25VGqhTAfsfIYlzhOdRkpk",
  authDomain: "ghuna-5256f.firebaseapp.com",
  projectId: "ghuna-5256f",
  storageBucket: "ghuna-5256f.firebasestorage.app",
  messagingSenderId: "784420755782",
  appId: "1:784420755782:web:731dc355a92dc215c8ed47",
  measurementId: "G-5KJQN15NWM"
};

// Initialize Firebase
let app;
let auth;
let db;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    console.log('✅ Firebase initialized');
  } else {
    app = getApps()[0];
    console.log('✅ Firebase already initialized');
  }

  auth = getAuth(app);
  db = getFirestore(app);

  // Set persistence to LOCAL (keeps user logged in)
  setPersistence(auth, browserLocalPersistence)
    .then(() => console.log('✅ Auth persistence set to LOCAL'))
    .catch((err) => console.warn('⚠️ Persistence warning:', err));

  // Enable offline persistence for Firestore
  enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
      console.warn('⚠️ Multiple tabs open - persistence in first tab only');
    } else if (err.code === 'unimplemented') {
      console.warn('⚠️ Browser doesn\'t support persistence');
    }
  });

} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
}

export { auth, db };
export default app;