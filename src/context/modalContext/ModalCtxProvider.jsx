import { useState } from "react";
import ModalCtx from "./ModalCtx";

export default function ModalCtxProvider({ children }) {
  const [modalObjState, SetModalObjState] = useState({
    showAddItemForm: false,
    showEditItemForm: false,
    showNav: false,
    showTaskDetails: false,
    showDelEditOptions: false,
    toggleDelConfirm: false,
    toggleAddBoardForm: false,
    toggleEditBoardForm: false,
  });

  // add task form toggle
  //   type -> nav, newTask, editTask, details
  const toggleHandlerFn = (type) => {
    const modalObj0 = { ...modalObjState };
    if (type === "nav") {
      modalObj0.showNav = !modalObj0.showNav;
    } else if (type === "newTask") {
      modalObj0.showAddItemForm = !modalObj0.showAddItemForm;
    } else if (type === "editTask") {
      modalObj0.showEditItemForm = !modalObj0.showEditItemForm;
    } else if (type === "details") {
      modalObj0.showTaskDetails = !modalObj0.showTaskDetails;
      modalObj0.showDelEditOptions = false;
    } else if (type === "options") {
      modalObj0.showDelEditOptions = !modalObj0.showDelEditOptions;
    } else if (type === "detailsOffEditTaskOn") {
      modalObj0.showDelEditOptions = !modalObj0.showDelEditOptions;
      modalObj0.showTaskDetails = !modalObj0.showTaskDetails;
      modalObj0.showEditItemForm = !modalObj0.showEditItemForm;
    } else if (type === "delConfirmTaskDetails") {
      modalObj0.showTaskDetails = !modalObj0.showTaskDetails;
      modalObj0.toggleDelConfirm = !modalObj0.toggleDelConfirm;
    } else if (type === "removeDelConfirm") {
      modalObj0.toggleDelConfirm = false;
    } else if (type === "showBoardForm") {
      modalObj0.toggleAddBoardForm = !modalObj0.toggleAddBoardForm;
    } else if (type === "editBoardForm") {
      modalObj0.toggleEditBoardForm = !modalObj0.toggleEditBoardForm;
    }
    SetModalObjState(modalObj0);
  };

  return (
    <ModalCtx.Provider
      value={{ modalObj: modalObjState, toggleHandler: toggleHandlerFn }}
    >
      {children}
    </ModalCtx.Provider>
  );
}
