import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { Provider } from "react-redux";
import reduxStore from "./store/store.ts";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <Toaster position="top-right" richColors />
      <App />
    </Provider>
  </StrictMode>
);
