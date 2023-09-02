import "./index.css";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.tsx";
import Theme from "./Styles/Theme.ts";
import ContextProvider from "./Data/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </ContextProvider>
);
