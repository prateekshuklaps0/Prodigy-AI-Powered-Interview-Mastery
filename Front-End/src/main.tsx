import "./index.css";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.tsx";
import ContextProvider from "./Data/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ContextProvider>
);
