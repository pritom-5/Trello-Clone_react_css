import css from "./LeftBarDesktop.module.css";
import { LeftBarRender } from "./Leftbar";

export default function LeftBarDesktop() {
  return (
    <div id="leftBar_desktop_section" className={css.left_bar_desktop}>
      <LeftBarRender />
    </div>
  );
}
