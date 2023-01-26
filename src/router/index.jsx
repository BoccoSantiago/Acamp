import { DefaultDesign, Details, Home } from "../pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/listing/:id", element: <Details /> },
  { path: "/default-design", element: <DefaultDesign /> },
  { path: "/*", element: <Home /> },
]);
