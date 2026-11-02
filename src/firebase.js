import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(
  (value) => typeof value === 'string' && value.trim() !== '' && !value.startsWith('YOUR_')
);

let app = null;

if (hasFirebaseConfig) {
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully:', app);
} else {
  console.info(
    'Firebase is not initialized yet. Copy .env.example to .env.local, add your Firebase web app config, and restart npm start.'
  );
}

export default app;
