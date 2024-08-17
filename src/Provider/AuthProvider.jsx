/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"; 
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.config";

// Create the AuthContext
export const AuthContext = createContext(null);
const auth = getAuth(app);
const goolgProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
 const [user,setUser]=useState('')
 const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
   const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
   const logInWithGoogle=()=>{
    return signInWithPopup(auth,goolgProvider)
   }
   const logOut =  () => {
    return signOut(auth)
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
        user,loading,logIn,logInWithGoogle,logOut
     };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
