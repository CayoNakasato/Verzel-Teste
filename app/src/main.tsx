import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/theme.tsx";
import { ContextProvider } from "./contexts/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider resetCSS theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);
