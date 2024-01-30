import Header from "./components/Header";
import Hero from "./components/Hero";
import LabPage from "./components/laboratory";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import { ReactDOM } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
        <Route path="/" index element={<Hero />} />
        <Route path="/lab" element={<LabPage />} />
      </Route>
  )
)


function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );

}

export default App;
