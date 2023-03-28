import _ from "lodash";
import getActiveBoardNameIndex from "./getActiveBoardNameIndex";

export default function editTaskHandlerFn(
  data,
  setDataState,
  inputObj,
  colIndex,
  taskIndex
) {
  // deep copy data
  const data0 = _.cloneDeep(data);

  data0.boards[getActiveBoardNameIndex(data).activeBoardIndex].columns[
    colIndex
  ].tasks[taskIndex] = inputObj;

  setDataState(data0);
}
