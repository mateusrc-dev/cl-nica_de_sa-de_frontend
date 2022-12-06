import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Professionals } from "../pages/Professionals";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/details/:id" element={<Details />} />;
      <Route path="/professionals" element={<Professionals />} />;
      <Route path="/signIn" element={<SignIn />} />;
      <Route path="/signUp" element={<SignUp />} />;
    </Routes>
  );
}
