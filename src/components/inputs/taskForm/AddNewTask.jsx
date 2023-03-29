import { useContext } from "react";
import ModalCtx from "../../../context/modalContext/ModalCtx";
import Modal from "../../UI/Modal";
import TaskForm from "./TaskForm";

const initialFormValues = {
  title: "",
  description: "",
  status: "",
  subtasks: [{ title: "", isCompleted: false }],
};

export default function AddNewTask() {
  const { toggleHandler } = useContext(ModalCtx);
  return (
    <Modal modalFn={toggleHandler} type="newTask">
      <TaskForm
        defaultFormValues={initialFormValues}
        title="Add New Task"
        submitButtonText="Add New Task"
        taskType="add"
      />
    </Modal>
  );
}
