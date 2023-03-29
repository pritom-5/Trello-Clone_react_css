import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UICtx from "./context/uiContext/UICtx";
import Topbar from "./components/topbar/Topbar";
import Test from "./test/Test";
import LeftBar from "./components/leftbar/Leftbar";
import Board from "./components/board/Board";
import AddNewTask from "./components/inputs/taskForm/AddNewTask";
import ModalCtx from "./context/modalContext/ModalCtx";
import CardDetails from "./components/cardDetails/CardDetails";
import DataCtx from "./context/dataContext/DataCtx";
import DelModal from "./components/UI/DelTaskConfirmModal";
import DelTaskConfirmModal from "./components/UI/DelTaskConfirmModal";
import EditTask from "./components/inputs/taskForm/EditTask";
import AddNewBoard from "./components/inputs/boardForm/AddNewBoard";
import EditBoard from "./components/inputs/boardForm/EditBoard";

function App() {
  const { isDesktopHandler } = useContext(UICtx);
  const { modalObj } = useContext(ModalCtx);
  const {
    showEditItemForm,
    showAddItemForm,
    showTaskDetails,
    toggleDelConfirm,
    toggleAddBoardForm,
    toggleEditBoardForm,
  } = modalObj;
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
      {showAddItemForm && <AddNewTask />}

      {/* edit task */}
      {showEditItemForm && <EditTask />}

      {/* task details */}
      {showTaskDetails && <CardDetails />}

      {/* del confirm modal */}
      {toggleDelConfirm && <DelTaskConfirmModal />}

      {/* add new bord modal */}
      {toggleAddBoardForm && <AddNewBoard />}

      {toggleEditBoardForm && <EditBoard />}
    </div>
  );
}

export default App;
