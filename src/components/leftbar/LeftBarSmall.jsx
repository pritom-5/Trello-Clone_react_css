import Modal from "../UI/Modal";
import { LeftBarRender } from "./Leftbar";

export default function LeftBarSmall() {
  return (
    <div id="leftbar_small_section">
      <Modal>
        <LeftBarRender />
      </Modal>
    </div>
  );
}
