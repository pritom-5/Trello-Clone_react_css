import { useContext } from "react";
import DataCtx from "../../context/dataContext/DataCtx";
import Modal from "../UI/Modal";
import TaskForm from "./TaskForm";

export default function EditTask(activeBoardIndex, ColIndex, taskIndex) {
  const { data } = useContext(DataCtx);

  // TODO : make data dynamic
  //   bring value while task card was clicked
  const taskCardInfo = data.boards[0].columns[0].tasks[2];
  return (
    <Modal>
      <TaskForm
        submitButtonText="Edit Task"
        title="Edit Task"
        defaultFormValues={taskCardInfo}
        taskType="edit"
        activeColIndex="0"
        activeTaskIndex="2"
      />
    </Modal>
  );
}
