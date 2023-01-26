import { Details, Home } from "../pages";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { NavBar } from "../components";

function LayOut() {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <LayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:id", element: <Details /> },
      { path: "/*", element: <Home /> },
    ],
  },
]);
