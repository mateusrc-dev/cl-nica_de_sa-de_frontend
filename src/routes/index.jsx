import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { ProfessionalRoutes } from "./professional.routes";
import { UserRoutes } from "./user.routes";
import { useAuthUser } from "../hooks/authUser";
import { useAuthProfessional } from "../hooks/authProfessional";

export function Routes() {
  const { user } = useAuthUser();
  const { professional } = useAuthProfessional();
  if (user) {
    return (
      <BrowserRouter>
        <UserRoutes />
      </BrowserRouter>
    );
  } else if (professional) {
    return (
      <BrowserRouter>
        <ProfessionalRoutes />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
  }
}