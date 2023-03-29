import { useContext } from "react";
import DataCtx from "../../context/dataContext/DataCtx";
import dragCardHandlerFn from "../../hooks/dragCardHandlerFn";
import Card from "./Card";
import css from "./Col.module.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export default function Col({ colItem, colIndex }) {
  // animation library
  const [animationParent] = useAutoAnimate();

  // get data and set data from context to pass to function dragCardHandlerFn
  const { data, setData } = useContext(DataCtx);

  // task count
  const taskCount = colItem.tasks.length;

  // onDrop
  const dropHandler = (e) => {
    const CardData = JSON.parse(e.dataTransfer.getData("text"));

    // check if drpping in the same zone or not
    // if droppingin same zone just return
    if (CardData.colIndex === colIndex) {
      return;
    }
    dragCardHandlerFn({ ...CardData, targetCol: colIndex }, data, setData);
  };

  // onDragOver
  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id="col_section"
      className={css.col_section}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
    >
      <div
        id="col_name"
        className="header_3"
      >{`${colItem.name} (${taskCount})`}</div>
      <div
        id="tasks_section"
        className={css.tasks_section}
        ref={animationParent}
      >
        {colItem.tasks.map((item, index) => (
          <Card
            key={index}
            cardItem={item}
            cardIndex={index}
            colIndex={colIndex}
          />
        ))}
      </div>
    </div>
  );
}
