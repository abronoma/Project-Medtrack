import React from "react";
import Home from "./components/landing/home";
import Hero from "./components/landing/Hero";
import Pharmacy from "./components/pharmacy/pharmacy";
import Lab from "./components/laboratory/laboratory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";
// import logo from '../public/'
// import { ReactDOM } from "react";

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
        path: "/laboratory",
        element: <Lab />,
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
