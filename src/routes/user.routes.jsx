import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/Details";
import { Favorites } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Professionals } from "../pages/Professionals";
import { ProfileUser } from "../pages/ProfileUser";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { TheirTestimonials } from "../pages/TheirTestimonials";
import { YourSchedules } from "../pages/YourSchedules";
import { Welcome } from "../pages/Welcome";

export function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/favorites" element={<Favorites />} />;
      <Route path="/details/:id" element={<Details />} />;
      <Route path="/professionals" element={<Professionals />} />;
      <Route path="/profileUser" element={<ProfileUser />} />;
      <Route path="/signIn" element={<SignIn />} />;
      <Route path="/signUp" element={<SignUp />} />;
      <Route path="/theirTestimonials" element={<TheirTestimonials />} />;
      <Route path="/yourSchedules" element={<YourSchedules />} />;
      <Route path="/welcome" element={<Welcome />} />;
    </Routes>
  );
}
