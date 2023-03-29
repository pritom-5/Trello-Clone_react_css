import { useContext } from "react";
import DataCtx from "../../../context/dataContext/DataCtx";
import ModalCtx from "../../../context/modalContext/ModalCtx";
import getActiveBoardNameIndex from "../../../hooks/getActiveBoardNameIndex";
import Modal from "../../UI/Modal";
import TaskForm from "./TaskForm";

export default function EditTask() {
  const { data, cardDetailsState } = useContext(DataCtx);
  const { toggleHandler } = useContext(ModalCtx);

  // destructure cardDetailsState
  const { boardIndex, colIndex, cardIndex } = cardDetailsState;

  // TODO : make data dynamic
  //   bring value while task card was clicked
  const taskCardInfo =
    data.boards[boardIndex].columns[colIndex].tasks[cardIndex];
  return (
    <Modal modalFn={toggleHandler} type="detailsOffEditTaskOn">
      <TaskForm
        submitButtonText="Edit Task"
        title="Edit Task"
        defaultFormValues={taskCardInfo}
        taskType="edit"
        activeColIndex={colIndex}
        activeTaskIndex={cardIndex}
      />
    </Modal>
  );
}
