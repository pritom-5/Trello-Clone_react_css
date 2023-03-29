import { useContext } from "react";
import DataCtx from "../../../context/dataContext/DataCtx";
import Modal from "../../UI/Modal";
import NewBoardForm from "./NewBoardForm";
import getActiveBoardNameIndex from "../../../hooks/getActiveBoardNameIndex";
import ModalCtx from "../../../context/modalContext/ModalCtx";

export default function EditBoard() {
  const { data } = useContext(DataCtx);
  const { toggleHandler } = useContext(ModalCtx);
  const { activeBoardIndex } = getActiveBoardNameIndex(data);

  const boardData = data.boards[activeBoardIndex];

  //////
  console.log(boardData);

  return (
    <Modal modalFn={() => toggleHandler("editBoardForm")}>
      <NewBoardForm
        defaultFormValues={boardData}
        type="edit"
        boardIndex={activeBoardIndex}
      />
    </Modal>
  );
}
