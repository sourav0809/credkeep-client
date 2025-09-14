import AppRouter from "@/routes/AppRouter";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return <RouterProvider router={AppRouter} />;
}
