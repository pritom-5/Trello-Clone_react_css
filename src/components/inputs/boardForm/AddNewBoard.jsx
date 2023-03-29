import { useContext } from "react";
import ModalCtx from "../../../context/modalContext/ModalCtx";
import Modal from "../../UI/Modal";
import NewBoardForm from "./NewBoardForm";

const defaultFormValues = {
  name: "Board Name",
  isActive: false,
  columns: [
    { name: "Todo", tasks: [] },
    { name: "Doing", tasks: [] },
  ],
};

export default function AddNewBoard() {
  const { toggleHandler } = useContext(ModalCtx);
  return (
    <Modal modalFn={() => toggleHandler("showBoardForm")}>
      <NewBoardForm defaultFormValues={defaultFormValues} type="add" />
    </Modal>
  );
}
