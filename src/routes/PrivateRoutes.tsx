import Dashboard from "@/pages/dashboard/Dashboard";
import AuthGuard from "./guard/AuthGuard";
import PrivateLayout from "@/common/components/layouts/PrivateLayout";
import { navigationPaths } from "@/common/constants/url.const";

const PrivateRoutes = [
  {
    element: <AuthGuard />,
    path: "/",
    children: [
      {
        element: <PrivateLayout />,
        children: [
          {
            path: navigationPaths.DASHBOARD,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];

export default PrivateRoutes;
