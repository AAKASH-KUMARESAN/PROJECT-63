import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBDYeTZzbJmbimLwasQ-5g33ENEAFNe150",
  authDomain: "school-attendance-app-7ced9.firebaseapp.com",
  databaseURL: "https://school-attendance-app-7ced9-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-7ced9",
  storageBucket: "school-attendance-app-7ced9.appspot.com",
  messagingSenderId: "775548171222",
  appId: "1:775548171222:web:35a1a9dd33364104fcaa77"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();