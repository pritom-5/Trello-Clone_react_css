import _ from "lodash";
import getActiveBoardNameIndex from "./getActiveBoardNameIndex";

export default function addTaskHandlerFn(data, setDataState, inputValuesObj) {
  // deep copy
  const data0 = _.cloneDeep(data);
  // find active board

  const { activeBoardIndex } = getActiveBoardNameIndex(data0);

  // find active col

  // unshift inputValueObj to activeCol -> first col
  data0.boards[activeBoardIndex].columns[0].tasks.unshift(inputValuesObj);

  setDataState(data0);
}
