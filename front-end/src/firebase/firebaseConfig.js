import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKvAVJnTqVKNoNil6YkmrSsxz7hV1PrSk",
  authDomain: "aitvaro-virtuve.firebaseapp.com",
  databaseURL: "https://aitvaro-virtuve.firebaseio.com",
  projectId: "aitvaro-virtuve",
  storageBucket: "aitvaro-virtuve.appspot.com",
  messagingSenderId: "201877749579",
  appId: "1:201877749579:web:d25493116c9d6e079f32ce",
};

export default firebase.initializeApp(firebaseConfig);
