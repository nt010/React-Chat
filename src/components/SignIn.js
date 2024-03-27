import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="header">
      <Button onClick={signInWithGoogle} variant="contained" color="primary">
        グーグルでログインする
      </Button>
    </div>
  );
}

export default SignIn;
