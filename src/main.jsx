import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataCtxProvider from "./context/dataContext/DataCtxProvider";
import ModalCtxProvider from "./context/modalContext/ModalCtxProvider";
import UICtxProvider from "./context/uiContext/UICtxProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataCtxProvider>
    <UICtxProvider>
      <ModalCtxProvider>
        <App />
      </ModalCtxProvider>
    </UICtxProvider>
  </DataCtxProvider>
);
