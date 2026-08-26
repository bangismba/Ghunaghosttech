import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth, browserLocalPersistence, setPersistence } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCLOx6MRFvat25VGqhTAfsfIYlzhOdRkpk",
  authDomain: "ghuna-5256f.firebaseapp.com",
  projectId: "ghuna-5256f",
  storageBucket: "ghuna-5256f.firebasestorage.app",
  messagingSenderId: "784420755782",
  appId: "1:784420755782:web:731dc355a92dc215c8ed47",
  measurementId: "G-5KJQN15NWM"
};

console.log('🔥 Firebase Config Loaded:');
console.log('📦 Project ID:', firebaseConfig.projectId);
console.log('🔑 Auth Domain:', firebaseConfig.authDomain);
console.log('✅ API Key:', firebaseConfig.apiKey ? 'Present' : 'Missing');

// Initialize Firebase
let app;
let db;
let auth;
let analytics;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    console.log('✅ Firebase initialized successfully');
  } else {
    app = getApps()[0];
    console.log('✅ Firebase already initialized');
  }
  
  db = getFirestore(app);
  auth = getAuth(app);
  
  // Set persistence
  if (auth) {
    setPersistence(auth, browserLocalPersistence)
      .then(() => console.log('✅ Auth persistence set'))
      .catch((err) => console.warn('⚠️ Persistence warning:', err));
  }
  
  // Enable offline persistence
  if (db) {
    enableIndexedDbPersistence(db).catch((err) => {
      if (err.code === 'failed-precondition') {
        console.warn('⚠️ Multiple tabs open - persistence in first tab only');
      } else if (err.code === 'unimplemented') {
        console.warn('⚠️ Browser doesn\'t support persistence');
      }
    });
  }
  
  // Initialize Analytics (optional)
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    console.log('✅ Analytics initialized');
  }
  
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
}

export { db, auth, analytics };
export default app;