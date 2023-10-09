import  { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import App from '../../App';
import auth from '../../Firebase/firebase.config';
import { unstable_HistoryRouter } from 'react-router-dom';

 export const AuthContext = createContext(null)
   
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
         
       const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
       }


       
    const logOut = () => {
        return signOut(auth);
    }

      useEffect(()=>{
        const unSbscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        return()=>{
            unSbscribe();
        }

      }, [])
     
    const authInfo = {
        user,
        createUser,
        logOut,
        signIn
     }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}