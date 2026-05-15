// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaSwj73DW4EpA2XIkL2cMTF_fBzDzPjg4",
  authDomain: "all-hadith-a68fa.firebaseapp.com",
  databaseURL: "https://all-hadith-a68fa-default-rtdb.firebaseio.com",
  projectId: "all-hadith-a68fa",
  storageBucket: "all-hadith-a68fa.firebasestorage.app",
  messagingSenderId: "124928027736",
  appId: "1:124928027736:web:7f0e8e0a771f244eca2e2d",
  measurementId: "G-RF51PW2PLD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();