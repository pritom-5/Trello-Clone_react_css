import css from "./DelConfirmModal.module.css";
import { useContext } from "react";
import ModalCtx from "../../context/modalContext/ModalCtx";
import Modal from "./Modal";
import DataCtx from "../../context/dataContext/DataCtx";
import removeTaskHandlerFn from "../../hooks/removeTaskHandlerFn";
import addTaskHandlerFn from "../../hooks/addTaskHandlerFn";
import getActiveBoardNameIndex from "../../hooks/getActiveBoardNameIndex";
import addNewBoardHandlerFn from "../../hooks/addNewBoardHandlerFn";

export default function DelBoardConfirmModal() {
  const { toggleHandler } = useContext(ModalCtx);
  const { data, setData } = useContext(DataCtx);

  const { activeBoardIndex } = getActiveBoardNameIndex(data);

  const clickHandler = () => {
    addNewBoardHandlerFn(data, setData, {}, "delete", activeBoardIndex);
    toggleHandler("delBoardConfirm");
  };

  return (
    <Modal modalFn={toggleHandler} type="delBoardConfirm">
      <div id="del_modal_section" className={css.del_modal_section}>
        <div id="text" className="header_2">
          Do you want to delete task?{" "}
        </div>
        <button className="btn" onClick={clickHandler}>
          confirm delete
        </button>
      </div>
    </Modal>
  );
}
