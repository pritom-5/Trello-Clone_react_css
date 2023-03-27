import { useContext } from "react";
import DataCtx from "../../context/dataContext/DataCtx";
import getActiveBoardCols from "../../hooks/getActiveBoardCols";
import Col from "./Col";
import css from "./Board.module.css";
import UICtx from "../../context/uiContext/UICtx";

export default function Board() {
  const { activeBoardCols } = getActiveBoardCols();
  const { isDesktop } = useContext(UICtx);
  return (
    <div
      id="board"
      className={isDesktop ? `${css.board} ${css.desktop}` : `${css.board}`}
    >
      {activeBoardCols.map((item, index) => (
        <Col key={index} colItem={item} colIndex={index} />
      ))}
    </div>
  );
}
