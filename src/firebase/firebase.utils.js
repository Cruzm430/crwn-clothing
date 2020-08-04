import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCIrpubQHo-v2CPuKUTP_wl1WFaL9PFcjA",
  authDomain: "crwn-shop-cruz.firebaseapp.com",
  databaseURL: "https://crwn-shop-cruz.firebaseio.com",
  projectId: "crwn-shop-cruz",
  storageBucket: "crwn-shop-cruz.appspot.com",
  messagingSenderId: "627597202157",
  appId: "1:627597202157:web:f22095000c5d4d3287b2e4",
  measurementId: "G-GQ0JW4X7C1"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;