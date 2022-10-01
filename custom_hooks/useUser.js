import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../lib/firebase";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user !== undefined || user !== null) setLoadingUser(false);
    });

    () => unSubscribe;
  }, [auth]);

  return { user, loadingUser };
};
