import css from "./DelTaskConfirmModal.module.css";
import { useContext } from "react";
import ModalCtx from "../../context/modalContext/ModalCtx";
import Modal from "./Modal";
import DataCtx from "../../context/dataContext/DataCtx";
import removeTaskHandlerFn from "../../hooks/removeTaskHandlerFn";

export default function DelTaskConfirmModal() {
  const { toggleHandler } = useContext(ModalCtx);
  const { cardDetailsState, data, setData } = useContext(DataCtx);

  const clickHandler = () => {
    removeTaskHandlerFn(data, setData, cardDetailsState);
    toggleHandler("removeDelConfirm");
  };

  return (
    <Modal
      modalFn={function () {
        toggleHandler("delConfirmTaskDetails");
      }}
    >
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
