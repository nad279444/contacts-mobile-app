import * as firebase from 'firebase'

import 'firebase/auth'


const  firebaseConfig = {
    apiKey: "AIzaSyASvr-69VWVqjJb2Ht3C1oyVn5U-2h3e_E",
    authDomain: "formlist-e54f0.firebaseapp.com",
    databaseURL: "https://formlist-e54f0.firebaseio.com",
    projectId: "formlist-e54f0",
    storageBucket: "formlist-e54f0.appspot.com",
    messagingSenderId: "100955574823",
    appId: "1:100955574823:web:02c512c4cacf273b1df402"
  };

firebase.initializeApp(firebaseConfig)