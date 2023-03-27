import { createContext } from "react";

const defaultDataContext = {
  data: {},
  setData: () => {},
};

const DataCtx = createContext(defaultDataContext);

export default DataCtx;
