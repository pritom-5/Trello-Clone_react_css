import { useContext } from "react";
import ModalCtx from "../../context/modalContext/ModalCtx";
import Modal from "../UI/Modal";
import { LeftBarRender } from "./Leftbar";

export default function LeftBarSmall() {
  const { toggleHandler, modalObj } = useContext(ModalCtx);
  const { showNav } = modalObj;
  return (
    <div id="leftbar_small_section">
      {showNav && (
        <Modal modalFn={toggleHandler} type="nav">
          <LeftBarRender />
        </Modal>
      )}
    </div>
  );
}
