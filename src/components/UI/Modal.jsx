import css from "./Modal.module.css";
export default function Modal({ children, modalFn, type }) {
  return (
    <div id="modal_section">
      <div
        id="modal_overlay"
        className={css.overlay}
        onClick={() => modalFn(type)}
      ></div>
      <div id="modal_content" className={css.modal_content}>
        {children}
      </div>
    </div>
  );
}
