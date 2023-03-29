import { createContext } from "react";

const modalCtxDefault = {
  modalObj: {
    showAddItemForm: false,
    showEditItemForm: false,
    showNav: false,
    showTaskDetails: false,
    showDelEditOptions: false,
    toggleDelTaskConfirm: false,
    toggleAddBoardForm: false,
    toggleEditBoardForm: false,
    showDelBoardConfirm: false,
  },
  toggleHandler: (type) => {},
};
const ModalCtx = createContext(modalCtxDefault);

export default ModalCtx;
