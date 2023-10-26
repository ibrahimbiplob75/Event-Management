import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.confiq";



export const ContextProvider=createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser ]=useState(null);
    const [loader, setLoader]=useState(true)

    const createUser=(email, password)=>{
        setLoader(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn=(email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email, password);
    }

    const logout=()=>{
        setLoader(true);
        return signOut(auth);
        
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (CurrentUser) => {

            if (CurrentUser) {
            
              //const userid = CurrentUser.uid;
              setUser(CurrentUser);
              setLoader(false)
              
            }
            
        });
        return ()=>{
            unSubscribe();
        }


    },[])


    const authInfo = {
      user,
      createUser,
      logout,
      signIn,
      loader,
    };
    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};



export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};

