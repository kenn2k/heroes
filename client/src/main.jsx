import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ReactQueryClientProvider } from "./providers/QueryProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/RouterProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ReactQueryClientProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ReactQueryClientProvider>
);
