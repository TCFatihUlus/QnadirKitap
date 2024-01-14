import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { boot } from 'quasar/wrappers';

const firebaseConfig = {
  apiKey: 'AIzaSyDSAokYALWVshZASDr9i3mw_A61WYdsIsM',
  authDomain: 'nadirkitap-e2cab.firebaseapp.com',
  projectId: 'nadirkitap-e2cab',
  storageBucket: 'nadirkitap-e2cab.appspot.com',
  messagingSenderId: '1018447984771',
  appId: '1:1018447984771:web:bc324129a910cfa00d03b6',
};

// Initialize Firebase
const fapp = initializeApp(firebaseConfig);
const db = getFirestore(fapp);
export default boot(async ({ app }) => {
  app.config.globalProperties.$db = db;
  app.config.globalProperties.$Firebaseapp = fapp;
});
export { fapp };
