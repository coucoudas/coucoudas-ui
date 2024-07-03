import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./style/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
