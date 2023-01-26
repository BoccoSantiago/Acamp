import { GlobalStyle } from "./styles";
import { RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { router } from "./router";

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
