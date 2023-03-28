import DataCtx from "./DataCtx";
import initialData from "../../data/Data.json";
import { useState } from "react";
export default function DataCtxProvider({ children }) {
  const [dataState, setDataState] = useState(initialData);
  const [cardDetailsState, setCardDetailsState] = useState({});

  const setCardDetailsStateHandlerFn = (boardIndex, colIndex, cardIndex) => {
    setCardDetailsState({ boardIndex, colIndex, cardIndex });
  };
  return (
    <DataCtx.Provider
      value={{
        data: dataState,
        setData: setDataState,
        cardDetailsState: cardDetailsState,
        setCardDetailsStateHandler: setCardDetailsStateHandlerFn,
      }}
    >
      {children}
    </DataCtx.Provider>
  );
}
