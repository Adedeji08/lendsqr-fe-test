import { useRoutes } from "react-router-dom";
import MainRoutes from "./main-routes";
import LoginView from "../view/auth/login";


// ================|| ROUTING RENDER ||================ //

export default function ThemeRoutes() {
  return useRoutes([
    MainRoutes,
    { path: "/login", element: <LoginView /> },
  ]);
}
