import { Fragment, useContext } from "react";
import UICtx from "../../context/uiContext/UICtx";
import LeftBarDesktop from "./LeftBarDesktop";
import LeftBarSmall from "./LeftBarSmall";
import css from "./Leftbar.module.css";
import DataCtx from "../../context/dataContext/DataCtx";
import boardChangeHadnlerFn from "../../hooks/boardChangeHandlerFn";

export default function LeftBar() {
  const { isDesktop } = useContext(UICtx);

  return (
    <div id="leftbar">{isDesktop ? <LeftBarDesktop /> : <LeftBarSmall />}</div>
  );
}

export function LeftBarRender() {
  const { data, setData } = useContext(DataCtx);
  // count boards
  const boardsCount = data.boards.length;

  // change board on click
  const boardChangeHandler = (index) => {
    // call function to change isActive
    boardChangeHadnlerFn(index, data, setData);
  };
  return (
    <Fragment>
      <div id="board_count" className={`header_3 ${css.board_count}`}>
        ALL BOARDS ({boardsCount})
      </div>
      {data.boards.map((item, index) => (
        <div
          id="board_section"
          key={index}
          className={
            item.isActive
              ? `${css.board_section} ${css.active} pointer`
              : `${css.board_section} pointer`
          }
          onClick={() => boardChangeHandler(index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-layout-board-split"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#ffaed7"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M4 12h8"></path>
            <path d="M12 15h8"></path>
            <path d="M12 9h8"></path>
            <path d="M12 4v16"></path>
          </svg>
          <div id="name" className={`header_2 `}>
            {item.name}
          </div>
        </div>
      ))}
      <button className={`${css.create_board} btn`}>Create New Board</button>
    </Fragment>
  );
}
