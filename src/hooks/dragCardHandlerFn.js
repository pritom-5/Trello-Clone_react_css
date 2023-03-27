import _ from "lodash";

export default function dragCardHandlerFn(cardInfoObj, data, setData) {
  const { cardIndex, colIndex, activeBoardIndex, targetCol } = cardInfoObj;

  // deep copy
  const data0 = _.cloneDeep(data);

  // remove from prevCol
  const splitData = data0.boards[activeBoardIndex].columns[
    colIndex
  ].tasks.splice(cardIndex, 1);

  // change status
  splitData[0].status = data0.boards[activeBoardIndex].columns.name;

  // add to targetCol

  data0.boards[activeBoardIndex].columns[targetCol].tasks.unshift(splitData[0]);

  setData(data0);
}
