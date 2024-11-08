import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ReactQueryClientProvider } from "./providers/QueryProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Superhero from "./components/superhero/Superhero.jsx";

import CreateHeroForm from "./components/superhero/form/CreateHeroForm.jsx";
import SuperheroDetails from "./components/superhero/details/SuperheroDetails.jsx";
import EditHeroForm from "./components/superhero/form/EditHeroForm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Superhero />,
  },
  {
    path: "/details/:id",
    element: <SuperheroDetails />,
  },
  {
    path: "/create",
    element: <CreateHeroForm />,
  },
  {
    path: "/edit/:id",
    element: <EditHeroForm />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ReactQueryClientProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ReactQueryClientProvider>
);
