import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UICtxProvider from "./context/uiContext/UICtxProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UICtxProvider>
    <App />
  </UICtxProvider>
);
