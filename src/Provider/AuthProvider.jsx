/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase.config";

const auth = getAuth(app);

// Create the AuthContext
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
 const [user,setUser]=useState('')
 const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          console.log('user', currentUser)
          setLoading(false)
        })
        return () => {
          return unsubscribe()
        }
      }, [])
      const authInfo = {
        createUser,
        user,loading
     };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
