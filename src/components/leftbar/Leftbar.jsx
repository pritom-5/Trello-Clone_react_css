import { Fragment, useContext } from "react";
import UICtx from "../../context/uiContext/UICtx";
import LeftBarDesktop from "./LeftBarDesktop";
import LeftBarSmall from "./LeftBarSmall";
import css from "./Leftbar.module.css";

const dummyData = [
  { name: "board1", isActive: true },
  { name: "board2", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
  { name: "board3", isActive: false },
];

export default function LeftBar() {
  const { isDesktop } = useContext(UICtx);

  return (
    <div id="leftbar_section">
      {isDesktop ? <LeftBarDesktop /> : <LeftBarSmall />}
    </div>
  );
}

export function LeftBarRender() {
  return (
    <Fragment>
      <div id="board_count" className={`header_3 ${css.board_count}`}>
        ALL BOARDS (3)
      </div>
      {dummyData.map((item, index) => (
        <div
          id="board_section"
          key={index}
          className={
            item.isActive
              ? `${css.board_section} ${css.active} pointer`
              : `${css.board_section} pointer`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-layout-board-split"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="grey"
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
      <button className={`btn ${css.create_board}`}>Create New Board</button>
    </Fragment>
  );
}
