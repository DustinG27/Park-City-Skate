// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhrR-BpEaAty9DdSGkmDvVK80l-4F8rBI",
  authDomain: "park-city-skate.firebaseapp.com",
  projectId: "park-city-skate",
  storageBucket: "park-city-skate.appspot.com",
  messagingSenderId: "176985768644",
  appId: "1:176985768644:web:066a22a713206c4612ff91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
// every time a user interacts they are forced to select an account 
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); 

export const db = getFirestore();

// creating authentication and storage for authusers
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
   // getting the document reference inside of the database under the user collection with the userauth 
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    // once userDocRef is grabbed, snapShot checks is there's an instance that exists and allows for access to data 
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    // checkin if snapShot exists. if if doesn't then set the doc with the object
    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};