import { useContext } from "react";
import DataCtx from "../context/dataContext/DataCtx";
import getActiveBoardNameIndex from "./getActiveBoardNameIndex";

export default function getActiveBoardCols() {
  const { data } = useContext(DataCtx);

  // find the active board
  const { activeBoardIndex } = getActiveBoardNameIndex(data);
  const activeBoardCols = data.boards[activeBoardIndex].columns;
  return { activeBoardCols };
}
