import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { ProfessionalRoutes } from "./professional.routes";
import { UserRoutes } from "./user.routes";
import { useAuthUser } from "../hooks/authUser";

export function Routes() {
  const { user } = useAuthUser();
  console.log(user)
  return <BrowserRouter>{user ? <UserRoutes /> : <AppRoutes />}</BrowserRouter>;
 
}
