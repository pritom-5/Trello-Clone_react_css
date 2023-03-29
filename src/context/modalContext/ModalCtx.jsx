import { createContext } from "react";

const modalCtxDefault = {
  modalObj: {
    showAddItemForm: false,
    showEditItemForm: false,
    showNav: false,
    showTaskDetails: false,
    showDelEditOptions: false,
    toggleDelConfirm: false,
    toggleAddBoardForm: false,
    toggleEditBoardForm: false,
  },
  toggleHandler: (type) => {},
};
const ModalCtx = createContext(modalCtxDefault);

export default ModalCtx;
