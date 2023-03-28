import { Fragment, useContext } from "react";
import DataCtx from "../../context/dataContext/DataCtx";
import ModalCtx from "../../context/modalContext/ModalCtx";
import getActiveBoardNameIndex from "../../hooks/getActiveBoardNameIndex";
import CardDetails from "../cardDetails/CardDetails";
import css from "./Card.module.css";
export default function Card({ cardItem, cardIndex, colIndex }) {
  const { data, setCardDetailsStateHandler } = useContext(DataCtx);
  const { toggleHandler, modalObj } = useContext(ModalCtx);
  const { showTaskDetails } = modalObj;

  // total subtasks count
  const totalSubtasks = cardItem.subtasks.length;

  // completed subtasks count
  const completedSubtasks = cardItem.subtasks.filter(
    (item) => item.isCompleted
  ).length;

  // get active board info
  const { activeBoardIndex } = getActiveBoardNameIndex(data);

  const dragStartHandler = (e, cardIndex) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({ cardIndex, colIndex, activeBoardIndex })
    );
  };

  const clickHandler = () => {
    toggleHandler("details");
    setCardDetailsStateHandler(activeBoardIndex, colIndex, cardIndex);
  };
  return (
    <Fragment>
      <div
        id="card_section"
        className={`${css.card_section} pointer`}
        draggable
        onDragStart={(e) => dragStartHandler(e, cardIndex)}
        onClick={clickHandler}
      >
        <div id="title" className={`${css.cardTitle} header_4`}>
          {cardItem.title}
        </div>
        <div
          id="subtasks"
          className="header_3"
        >{`${completedSubtasks} of ${totalSubtasks} subtasks`}</div>
      </div>
    </Fragment>
  );
}
