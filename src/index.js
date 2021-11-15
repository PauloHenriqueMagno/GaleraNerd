import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Provider from "./providers";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Styles";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
