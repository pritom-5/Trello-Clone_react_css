import _ from "lodash";
import getActiveBoardNameIndex from "./getActiveBoardNameIndex";

export default function boardChangeHadnlerFn(targetBoardIndex, data, setData) {
  // deep copy
  const data0 = _.cloneDeep(data);

  // get active board index
  const { activeBoardIndex } = getActiveBoardNameIndex(data0);
  // set existing board isActive -> false
  data0.boards[activeBoardIndex].isActive = false;

  // change target isActive -> true
  data0.boards[targetBoardIndex].isActive = true;

  setData(data0);
}
