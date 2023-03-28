import Modal from "../UI/Modal";
import { LeftBarRender } from "./Leftbar";

export default function LeftBarSmall() {
  return (
    <div id="leftbar_small_section">
      {true && (
        <Modal>
          <LeftBarRender />
        </Modal>
      )}
    </div>
  );
}
