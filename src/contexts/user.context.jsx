import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from '../utilities/firebase/firebase';

// actual value used for access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
})

// the functional component returning every context
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    //the object to hold the set values
    const value = { currentUser, setCurrentUser };

    
    useEffect(()=>{
       const unsubscribe = onAuthStateChangedListener((user)=>{
           if (user) {
               createUserDocumentFromAuth(user);
           } 
           setCurrentUser(user);
       });
       return unsubscribe;
    },[]);
    // passing the values
    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}