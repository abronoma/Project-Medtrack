import React from "react";
import Home from "./components/landing/home";
import Hero from "./components/landing/Hero";
import Pharmacy from "./components/pharmacy/pharmacy";
import Lab from "./components/laboratory/laboratory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
import UpdateDrugs from "./pages/updateDrugs";
import UpdateLabs from "./pages/updateLabs";
import ViewDrug from "./components/pharmacy/ViewDrug";
import ViewLab from "./components/laboratory/ViewLab";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/pharmacy",
        element: <Pharmacy />,          
      },
      {
        path: "/updatedrugs/:id",
        element: <UpdateDrugs />
      },
      {
        path: "/fetchdrug/:id",
        element: <ViewDrug />
      },
      {
        path: "/laboratory",
        element: <Lab />,
      },
      {
        path: "/updatelabs/:id",
        element: <UpdateLabs />
      },
      {
        path: "/fetchlab/:id",
        element: <ViewLab />
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Helmet>
        <title>Medtrack</title>
        <link rel="icon" href="../public/medtrack.png" type="image/png" />
      </Helmet>
    </div>
  );
}

export default App;
