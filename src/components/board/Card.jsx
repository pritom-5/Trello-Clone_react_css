import { useContext } from "react";
import DataCtx from "../../context/dataContext/DataCtx";
import getActiveBoardNameIndex from "../../hooks/getActiveBoardNameIndex";
import css from "./Card.module.css";
export default function Card({ cardItem, cardIndex, colIndex }) {
  const { data } = useContext(DataCtx);

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
  return (
    <div
      id="card_section"
      className={`${css.card_section} pointer`}
      draggable
      onDragStart={(e) => dragStartHandler(e, cardIndex)}
    >
      <div id="title" className={css.cardTitle}>
        {cardItem.title}
      </div>
      <div
        id="subtasks"
        className="header_3"
      >{`${completedSubtasks} of ${totalSubtasks} subtasks`}</div>
    </div>
  );
}
