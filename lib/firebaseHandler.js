import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

export const signInUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const errorCode = error.code;
    const errorMsg = error.message;
    console.log("ERROR MSG: " + errorMsg + "ERROR CODE: " + errorCode);
  }
};

export const signUpUser = async (name, email, password) => {
  try {
    await fetch("/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  } catch (error) {
    console.log("ERROR POSTING TO API ", error.message);
  }
};

export const signUserOut = () => {
  signOut(auth);
};
