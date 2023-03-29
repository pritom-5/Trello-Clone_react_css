import css from "./NewBoardForm.module.css";
import { useFieldArray, useForm } from "react-hook-form";
import addNewBoardHandlerFn from "../../../hooks/addNewBoardHandlerFn";
import { useContext } from "react";
import DataCtx from "../../../context/dataContext/DataCtx";
import ModalCtx from "../../../context/modalContext/ModalCtx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

// type -> 'edit', 'add'
export default function NewBoardForm({ defaultFormValues, type, boardIndex }) {
  const { data, setData } = useContext(DataCtx);
  const { toggleHandler } = useContext(ModalCtx);

  const { register, handleSubmit, control } = useForm({
    defaultValues: defaultFormValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "columns",
    control,
  });

  // get auto animate hook to use
  const [animationParent] = useAutoAnimate();
  const submitHandler = (baordObjData) => {
    addNewBoardHandlerFn(data, setData, baordObjData, type, boardIndex);

    switch (type) {
      case "add":
        toggleHandler("showBoardForm");
        break;
      case "edit":
        toggleHandler("editBoardForm");
        break;

      default:
        break;
    }
  };
  return (
    <div id="new_board_form" className={css.new_board_form_section}>
      <div id="title" className="header_2">{`Add Board`}</div>
      <form className={css.flex_1_col} onSubmit={handleSubmit(submitHandler)}>
        <div id="title_section">
          <label htmlFor="title" className="header_3">
            Title
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            id="title"
          />
        </div>

        <div id="col_section" className={css.flex_1_col} ref={animationParent}>
          <div id="col_title">Columns List</div>
          {fields.map((field, index) => (
            <div id="col_section" key={field.id} className={css.flex_1}>
              <input
                {...register(`columns.${index}.name`)}
                type="text"
                id={field.id}
              />
              <button
                className="btn"
                type="button"
                onClick={() => remove(index)}
              >
                del
              </button>
            </div>
          ))}
        </div>
        <button
          id="add_new_col"
          type="button"
          className="btn"
          onClick={() => append({ name: "", tasks: [] })}
        >
          add
        </button>
        <button type="submit" className="btn">
          add new board
        </button>
      </form>
    </div>
  );
}
