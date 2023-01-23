import GlobalStyle from "./styles/globalStyles";
import { Home, Alt, Main } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/home", element: <Home /> },
    { path: "/listing/:id", element: <Alt /> },
    { path: "/*", element: <Main /> },
  ]);
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
