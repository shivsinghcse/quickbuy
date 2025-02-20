import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyAVN15UzPFPatu-ziXWquMDsKWdMO6DkXU',
    authDomain: 'quickbuy-ec468.firebaseapp.com',
    projectId: 'quickbuy-ec468',
    storageBucket: 'quickbuy-ec468.firebasestorage.app',
    messagingSenderId: '912699584511',
    appId: '1:912699584511:web:cfbcf1a7c9a93521f881ca',
    measurementId: 'G-LKBVQ3Q44W',
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);

export default firebaseAppConfig;
