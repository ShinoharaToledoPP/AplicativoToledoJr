import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDsOkoJAOmgxEcblnmhIlcOULGB8ctgXM0",
  authDomain: "apptoledojr.firebaseapp.com",
  databaseURL: "https://apptoledojr-default-rtdb.firebaseio.com",
  projectId: "apptoledojr",
  storageBucket: "apptoledojr.appspot.com",
  messagingSenderId: "372137804523",
  appId: "1:372137804523:web:933453b31b12bee791b4ae"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export default firebase;