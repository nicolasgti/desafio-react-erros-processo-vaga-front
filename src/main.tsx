import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./global.css";


ReactDOM.createRoot(document.getElementById("main") as HTMLElement).render( 
  // StrictMode ajuda a identificar problemas potenciais na aplicação
  <React.StrictMode>
    <App />
  </React.StrictMode>
);