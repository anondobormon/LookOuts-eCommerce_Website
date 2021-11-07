import React from "react";
import { Footer } from "../Footer/Footer";
import { Nav } from "../Navbar/Nav";
import { NewsLatter } from "../Newsletter/NewsLatter";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div>
      <Nav />
      <LoginForm />
      <NewsLatter />
      <Footer />
    </div>
  );
};
