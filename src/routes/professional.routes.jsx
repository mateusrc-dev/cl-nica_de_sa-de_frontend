import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { Professionals } from "../pages/Professionals";
import { ProfileProfessional } from "../pages/ProfileProfessional";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Schedules } from "../pages/Schedules";
import { YourQueries } from "../pages/YourQueries";
import { Welcome } from "../pages/Welcome";

export function ProfessionalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/details/:id" element={<Details />} />;
      <Route path="/professionals" element={<Professionals />} />;
      <Route path="/profileProfessional" element={<ProfileProfessional />} />;
      <Route path="/signIn" element={<SignIn />} />;
      <Route path="/signUp" element={<SignUp />} />;
      <Route path="/schedules" element={<Schedules />} />;
      <Route path="/yourQueries" element={<YourQueries />} />;
      <Route path="/welcome" element={<Welcome />} />;
    </Routes>
  );
}
