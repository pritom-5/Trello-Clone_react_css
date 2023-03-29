import css from "./Topbar.module.css";
import { useContext, useState } from "react";
import UICtx from "../../context/uiContext/UICtx";
import wheel from "../../assets/wheel.svg";
import getActiveBoardNameIndex from "../../hooks/getActiveBoardNameIndex";
import DataCtx from "../../context/dataContext/DataCtx";
import ModalCtx from "../../context/modalContext/ModalCtx";

export default function () {
  const [showBoardOption, setShowBoardOption] = useState(false);
  const { data } = useContext(DataCtx);
  const { isDesktop } = useContext(UICtx);
  const { toggleHandler } = useContext(ModalCtx);

  // get active board name
  const { activeBoardName } = getActiveBoardNameIndex(data);

  // add new task handler
  const addNewTaskHandler = () => {
    toggleHandler("newTask");
  };

  // show nav on click
  const showNavHandler = () => {
    toggleHandler("nav");
  };

  const showBoardOptionsHandler = () => {
    setShowBoardOption(!showBoardOption);
  };

  const showTaskEditHandler = () => {
    toggleHandler("editBoardForm");
  };

  const showDeleteConfirmHandler = () => {
    toggleHandler("delBoardConfirm");
  };
  return (
    <div id="topbar_section">
      <div id="topbar_container" className={css.topbar_container}>
        <div id="logo" className={css.logo_container}>
          <img src={wheel} alt="logo" />
        </div>
        <div
          id="board_name_section"
          className={`${css.flex_1} ${css.board_name_section}`}
        >
          <div id="board_name" className="header_1">
            {activeBoardName}
          </div>
          {isDesktop ? (
            ""
          ) : (
            <div id="drop_btn" className="pointer" onClick={showNavHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="24"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
          )}
        </div>
        <button
          id="add_new_task_button"
          className={`btn ${css.flex_1}`}
          onClick={addNewTaskHandler}
        >
          {isDesktop ? (
            `+ Add New Task`
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 5l0 14"></path>
              <path d="M5 12l14 0"></path>
            </svg>
          )}
        </button>
        <div
          id="edit_del_board_brn"
          className="pointer"
          onClick={showBoardOptionsHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-dots-vertical"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          </svg>
        </div>
      </div>
      {showBoardOption && (
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
  );
}
