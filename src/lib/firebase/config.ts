import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, browserLocalPersistence, setPersistence, Auth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

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
  storage = getStorage(app);

  // Set persistence
  setPersistence(auth, browserLocalPersistence)
    .then(() => console.log('✅ Auth persistence set'))
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
  throw error;
}

export { auth, db, storage };
export default app;