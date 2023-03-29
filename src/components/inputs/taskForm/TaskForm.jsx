import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import DataCtx from "../../../context/dataContext/DataCtx";
import ModalCtx from "../../../context/modalContext/ModalCtx";
import addTaskHandlerFn from "../../../hooks/addTaskHandlerFn";
import editTaskHandlerFn from "../../../hooks/editTaskHandlerFn";
import css from "./TaskForm.module.css";

export default function TaskForm({
  submitButtonText,
  title,
  defaultFormValues,
  taskType,
  activeColIndex,
  activeTaskIndex,
}) {
  const { register, handleSubmit, control } = useForm({
    defaultValues: defaultFormValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "subtasks",
    control,
  });

  // auto animation hook
  const [animationParent] = useAutoAnimate();
  // context to get data and set data
  const { data: dataObj, setData } = useContext(DataCtx);
  const { toggleHandler } = useContext(ModalCtx);
  // form submit handler
  const submitHandler = (data) => {
    if (taskType === "edit") {
      editTaskHandlerFn(
        dataObj,
        setData,
        data,
        activeColIndex,
        activeTaskIndex
      );
      toggleHandler("editTask");
    }
    if (taskType === "add") {
      addTaskHandlerFn(dataObj, setData, data);
      toggleHandler("newTask");
    }
  };
  return (
    <div className={css.flex_2_col}>
      <div id="title_form" className="header_2">
        {title}
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className={css.flex_1_col}>
        {/* name input */}
        <div id="name_input_section" className={css.flex_1_col}>
          <label htmlFor="title" className="header_3">
            Title
          </label>
          <input
            name="title"
            {...register("title", { required: true, maxLength: 40 })}
          />
        </div>
        {/* description input */}
        <div id="desc_input_section" className={css.flex_1_col}>
          <label htmlFor="title" className="header_3">
            Description
          </label>
          <textarea {...register("description")} rows="5" />
        </div>
        {/* subtasks input */}
        <div
          id="subtasks_section"
          className={css.flex_1_col}
          ref={animationParent}
        >
          <div id="subtasks_title" className="header_3">
            Subtasks
          </div>
          {fields.map((field, index) => (
            <div id="subtask_section" key={field.id} className={css.flex_1}>
              <input
                {...register(`subtasks.${index}.title`, { required: true })}
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="btn"
              >
                del
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => append({ title: "", isCompleted: false })}
          className="btn"
        >
          add
        </button>
        <input type="submit" value={submitButtonText} className="btn" />
      </form>
    </div>
  );
}
