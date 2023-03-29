import { useState } from "react";
import ModalCtx from "./ModalCtx";

export default function ModalCtxProvider({ children }) {
  const [modalObjState, SetModalObjState] = useState({
    showAddItemForm: false,
    showEditItemForm: false,
    showNav: false,
    showTaskDetails: false,
    showDelEditOptions: false,
    toggleDelTaskConfirm: false,
    toggleAddBoardForm: false,
    toggleEditBoardForm: false,
    showDelBoardConfirm: false,
  });

  // add task form toggle
  //   type -> nav, newTask, editTask, details
  const toggleHandlerFn = (type) => {
    const modalObj0 = { ...modalObjState };
    switch (type) {
      case "nav":
        // nav overlay toggle =>  arrow tap -> nav open | modal overlay -> remove nav modal
        modalObj0.showNav = !modalObj0.showNav;
        break;

      case "newTask":
        // show add task form on AddNewTask button click | modal overlay -> remove form
        modalObj0.showAddItemForm = !modalObj0.showAddItemForm;
        break;
      case "editTask":
        // show edit task form on taskDetails -> options -> edit button click | modal overlay -> remove form
        modalObj0.showEditItemForm = !modalObj0.showEditItemForm;
        break;
      case "details":
        // show taskDetails on taskCard click | remove modal and options buttons if open
        modalObj0.showTaskDetails = !modalObj0.showTaskDetails;
        modalObj0.showDelEditOptions = false;
        break;
      case "options":
        // show options (del/edit) on click in taskDetails | remove on button click again
        modalObj0.showDelEditOptions = !modalObj0.showDelEditOptions;
        break;
      case "detailsOffEditTaskOn":
        // when edit clicked in taskDetails -> options => close details, close options buttons , open editTask form
        // when editTask from closed / overlay clicked => open details, open options buttons , close editTask form
        modalObj0.showDelEditOptions = !modalObj0.showDelEditOptions;
        modalObj0.showTaskDetails = !modalObj0.showTaskDetails;
        modalObj0.showEditItemForm = !modalObj0.showEditItemForm;
        break;
      case "delConfirmTaskDetails":
        // on taskDetails -> options -> delete click => close taskDetails , open confirm delete modal
        // on confirmDelete modal close overlay click => close confirm delete modal, open taskDetails
        modalObj0.showTaskDetails = !modalObj0.showTaskDetails;
        modalObj0.toggleDelTaskConfirm = !modalObj0.toggleDelTaskConfirm;
        break;
      case "removeDelConfirm":
        // on taskDeleteConfirm => close confirm modal
        modalObj0.toggleDelTaskConfirm = false;
        break;
      case "showBoardForm":
        // on createNewBoard click => open addNewBoard form | overlay click close form
        modalObj0.toggleAddBoardForm = !modalObj0.toggleAddBoardForm;
        break;
      case "editBoardForm":
        // on threeDot -> edit click => open editBoard form | overlay click close form
        modalObj0.toggleEditBoardForm = !modalObj0.toggleEditBoardForm;
        break;
      case "delBoardConfirm":
        // on threeDot -> delete click => open confirmDelete modal | overlay click close modal
        modalObj0.showDelBoardConfirm = !modalObj0.showDelBoardConfirm;
        break;
      default:
        break;
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
