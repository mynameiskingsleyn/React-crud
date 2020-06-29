import * as firebase from 'firebase';
import 'firebase/firestore';

const settings = {timestampsInSnapshots:true}

var firebaseConfig = {
    apiKey: "AIzaSyCWorPif2bW1S5GB_SZHLwUqIGdNySM9rM",
    authDomain: "reactcrudproject-a65a9.firebaseapp.com",
    databaseURL: "https://reactcrudproject-a65a9.firebaseio.com",
    projectId: "reactcrudproject-a65a9",
    storageBucket: "reactcrudproject-a65a9.appspot.com",
    messagingSenderId: "652489351296",
    appId: "1:652489351296:web:e209f117b4ed331e480665"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
// Initialize Firebase

export default firebase;