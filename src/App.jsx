import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UICtx from "./context/uiContext/UICtx";
import Topbar from "./components/topbar/Topbar";
import Test from "./test/Test";
import LeftBar from "./components/leftbar/Leftbar";
import Board from "./components/board/Board";
import AddNewTask from "./components/inputs/AddNewTask";
import EditTask from "./components/inputs/EditTask";

function App() {
  const { isDesktopHandler } = useContext(UICtx);
  // function to determine whether it's desktop or not. UICtx
  isDesktopHandler();

  return (
    <div>
      {/* <Test /> */}
      {/* top bar */}
      <Topbar />

      {/* left bar */}
      <LeftBar />

      {/* board */}
      <Board />

      {/* add new task */}
      {/* <AddNewTask /> */}

      {/* edit task */}
      <EditTask />
    </div>
  );
}

export default App;
