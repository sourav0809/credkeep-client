import { createBrowserRouter } from "react-router-dom";
import errorRoutes from "./ErrorRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    children: [...PublicRoutes, ...PrivateRoutes, ...errorRoutes],
  },
]);

export default AppRouter;
