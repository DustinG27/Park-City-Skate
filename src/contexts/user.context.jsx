import { createContext, useState } from 'react';

// actual value used for access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

// the functional component returning every context
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    //the object to hold the set values
    const value = { currentUser, setCurrentUser };
    // passing the values
    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}