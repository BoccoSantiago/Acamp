import GlobalStyle from "./styles/globalStyles";
import { Home, Alt, Main } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  AOS.init();
  const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/home", element: <Home /> },
    { path: "/listing/:id", element: <Alt /> },
    { path: "/*", element: <Main /> },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
