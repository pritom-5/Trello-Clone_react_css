import DataCtx from "./DataCtx";
import initialData from "../../data/Data.json";
import { useState } from "react";
export default function DataCtxProvider({ children }) {
  const [dataState, setDataState] = useState(initialData);
  return (
    <DataCtx.Provider value={{ data: dataState, setData: setDataState }}>
      {children}
    </DataCtx.Provider>
  );
}
