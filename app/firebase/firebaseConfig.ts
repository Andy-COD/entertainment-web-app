import firebase, { getApp, getApps, initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBCoYdy9rMTp8BZa8MKAJvkf40Ux3oVgHs",
  authDomain: "entertainment-web-app-fc959.firebaseapp.com",
  projectId: "entertainment-web-app-fc959",
  storageBucket: "entertainment-web-app-fc959.appspot.com",
  messagingSenderId: "792012172091",
  appId: "1:792012172091:web:e8ca7125333566e15ae51e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app);
export const db = getFirestore(app);
