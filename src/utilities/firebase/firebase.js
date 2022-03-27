// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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

const provider = new GoogleAuthProvider();
// every time a user interacts they are forced to select an account 
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// creating authentication and storage for authusers
export const createUserDocumentFromAuth = async (userAuth) => {
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
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log('error creating the suer', error.message);
        }
    }

    return userDocRef;
}