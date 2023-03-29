import css from "./CardDetails.module.css";
import { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import ModalCtx from "../../context/modalContext/ModalCtx";
import DataCtx from "../../context/dataContext/DataCtx";
import editTaskHandlerFn from "../../hooks/editTaskHandlerFn";

export default function CardDetails() {
  // get data and set data from context
  const { data, setData, cardDetailsState } = useContext(DataCtx);

  const { modalObj, toggleHandler } = useContext(ModalCtx);
  const { showDelEditOptions } = modalObj;

  // destructure data from props
  const { boardIndex, colIndex, cardIndex } = cardDetailsState;

  const [cardState, setCardState] = useState(
    data.boards[boardIndex].columns[colIndex].tasks[cardIndex]
  );

  const changeHandler = (e, index) => {
    const data0 = { ...cardState };
    data0.subtasks[index].isCompleted = e.target.checked;
    setCardState(data0);
  };

  const saveHandler = () => {
    editTaskHandlerFn(data, setData, cardState, colIndex, cardIndex);
    toggleHandler("details");
  };

  const showOptionsHandler = () => {
    toggleHandler("options");
  };

  const showTaskEditHandler = () => {
    toggleHandler("detailsOffEditTaskOn");
  };

  const showDeleteConfirmHandler = () => {
    toggleHandler("delConfirmTaskDetails");
  };
  return (
    <Modal modalFn={toggleHandler} type="details">
      <div
        id="card_details_section"
        className={`${css.flex_2_col} ${css.card_details_section}`}
      >
        <div
          id="title_section"
          className={`${css.flex_1} ${css.title_section}`}
        >
          <div id="title" className="header_1">
            {cardState.title}
          </div>
          <button className="btn" onClick={showOptionsHandler}>
            options
          </button>

          {/* options section */}
          {showDelEditOptions && (
            <div id="options_section" className={css.options_section}>
              {/* on edit button click remove details modal and open task edit modal */}
              <button className="btn" onClick={showTaskEditHandler}>
                edit
              </button>
              <button className="btn" onClick={showDeleteConfirmHandler}>
                delete
              </button>
            </div>
          )}
        </div>
        {!!cardState.description.length && (
          <div id="desc_section" className={css.flex_2_col}>
            <div id="title" className="header_3">
              Description
            </div>
            <div id="desc">{cardState.description}</div>
          </div>
        )}
        <div id="subtasks_section" className={css.flex_2_col}>
          <div id="title" className="header_3">
            Subtasks
          </div>
          {cardState.subtasks.map((item, index) => (
            <div id="subtask" className={css.subtask} key={index}>
              <input
                className={css.checkbox}
                type="checkbox"
                name={item.title}
                id={item.title}
                onChange={(e) => changeHandler(e, index)}
                defaultChecked={item.isCompleted}
              />
              <label
                htmlFor={item.title}
                className={
                  item.isCompleted
                    ? `${css.crossed} ${css.label}`
                    : `${css.label}`
                }
              >
                {item.title}
              </label>
            </div>
          ))}
        </div>
        <button onClick={saveHandler} className="btn">
          save
        </button>
      </div>
    </Modal>
  );
}
