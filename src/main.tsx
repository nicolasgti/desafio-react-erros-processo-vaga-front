import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./global.css";
//<React.StrictMode> para ajudar a identificar problemas potenciais no código, como práticas obsoletas ou erros silenciosos.

ReactDOM.createRoot(document.getElementById("main") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);