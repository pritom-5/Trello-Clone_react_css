import Modal from "../UI/Modal";
import TaskForm from "./TaskForm";

const initialFormValues = {
  title: "",
  description: "",
  status: "",
  subtasks: [{ title: "", isCompleted: false }],
};

export default function AddNewTask() {
  return (
    <Modal>
      <TaskForm
        defaultFormValues={initialFormValues}
        title="Add New Task"
        submitButtonText="Add New Task"
        taskType="add"
      />
    </Modal>
  );
}
