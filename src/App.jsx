import { GlobalStyle } from "./styles";
import { RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { router } from "./router";
import { NavBar } from "./components";

function App() {
  AOS.init({ once: true });

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
