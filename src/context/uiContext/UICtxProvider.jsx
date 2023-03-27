import { useEffect, useState } from "react";
import UICtx from "./UICtx";

export default function UICtxProvider({ children }) {
  const [isDesktopState, setIsDesktopState] = useState(window.innerWidth > 760);

  const isDesktopHandlerFn = () => {
    const updateMedia = () => {
      setIsDesktopState(window.innerWidth > 760);
    };

    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      console.log("handler");
      return () => window.removeEventListener("resize", updateMedia);
    });
  };
  return (
    <UICtx.Provider
      value={{
        isDesktop: isDesktopState,
        isDesktopHandler: isDesktopHandlerFn,
      }}
    >
      {children}
    </UICtx.Provider>
  );
}
