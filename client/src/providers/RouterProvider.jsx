import { createBrowserRouter } from "react-router-dom";
import Superhero from "../components/superhero/Superhero.jsx";
import CreateHeroForm from "../components/superhero/form/CreateHeroForm.jsx";
import SuperheroDetails from "../components/superhero/details/SuperheroDetails.jsx";
import EditHeroForm from "../components/superhero/form/EditHeroForm.jsx";

export const router = createBrowserRouter([
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
