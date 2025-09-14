import { navigationPaths } from "@/common/constants/url.const";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

const PublicRoutes = [
  {
    element: <Login />,
    path: navigationPaths.LOGIN,
  },
  {
    element: <Register />,
    path: navigationPaths.REGISTER,
  },
];

export default PublicRoutes;
