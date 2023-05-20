import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvidor = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(null);
  const [loading, setLoading] = useState(true);

  const customLogin = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const customSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentuser(user);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    currentUser,
    customLogin,
    customSignIn,
    googleLogin,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvidor;
