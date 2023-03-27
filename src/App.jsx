import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UICtx from "./context/uiContext/UICtx";
import Topbar from "./components/topbar/Topbar";
import Test from "./test/Test";
import LeftBar from "./components/leftbar/Leftbar";

function App() {
  const { isDesktopHandler } = useContext(UICtx);
  isDesktopHandler();
  return (
    <div>
      {/* <Test /> */}
      {/* top bar */}
      <Topbar />

      {/* left bar */}
      <LeftBar />
    </div>
  );
}

export default App;
