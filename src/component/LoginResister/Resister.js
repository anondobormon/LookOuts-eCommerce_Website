import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Navbar/Nav";
import { NewsLatter } from "../Newsletter/NewsLatter";
import firebaseConfig from "./firebase.config";
import { ResisterForm } from "./ResisterForm";

const app = initializeApp(firebaseConfig);

export const Resister = () => {
  const provider = new GoogleAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignUp = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, uid } = result.user;
        const signInUser = {
          username: displayName,
          email: email,
          userId: uid,
          isSignIn: true,
        };
        setLoggedInUser(signInUser);
        sessionStorage.setItem("email", signInUser.email);
        sessionStorage.setItem("username", signInUser.username);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(loggedInUser);
  const formData = () => {};

  return (
    <div>
      <Nav />
      <ResisterForm googleSignUp={googleSignUp} formData={formData} />
      <NewsLatter />
      <Footer />
    </div>
  );
};
