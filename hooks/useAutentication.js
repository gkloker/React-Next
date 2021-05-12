import React, { useEffect, useState } from "react";
import firebase from "../firebase";

export default function useAutentication() {
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });

    return () => unsuscribe();
  }, []);

  return userAuth;
}
