import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase_config";
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //!create user profile
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //!Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //!google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //!logOut
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  //!updateProfile
  const profile = (image, name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      photoURL: image,
      displayName: name,
    });
  };

  //!observer
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      const email = currentUser?.email || user?.email;
      const loggedUser = { email: email };

      if (currentUser) {
      } else {
      }

      setLoading(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    profile
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
