import { createContext } from "react";

const defaultDataContext = {
  data: {},
  setData: () => {},
  cardDetailsState: {},
  setCardDetailsStateHandler: (boardIndex, colIndex, cardIndex) => {},
};

const DataCtx = createContext(defaultDataContext);

export default DataCtx;
