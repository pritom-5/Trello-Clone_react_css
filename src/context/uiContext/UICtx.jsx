import { createContext } from "react";

const initialUIContext = {
  isDesktop: true,
  isDesktopHandler: () => {},
  showModal: {},
  showModalHandler: () => {},
};

const UICtx = createContext(initialUIContext);

export default UICtx;
