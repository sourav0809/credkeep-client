import useFetchUser from "@/common/hooks/useFetchUser";
import AppRouter from "@/routes/AppRouter";
import { RouterProvider } from "react-router-dom";
import { Spinner } from "@/common/components/ui/spinner";

export default function App() {
  const { isLoading } = useFetchUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Spinner size="lg" type="dots" text="Initializing your experience..." />
      </div>
    );
  }

  return <RouterProvider router={AppRouter} />;
}
