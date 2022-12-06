import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { ProfessionalRoutes } from "./professional.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <ProfessionalRoutes />
    </BrowserRouter>
  );
}