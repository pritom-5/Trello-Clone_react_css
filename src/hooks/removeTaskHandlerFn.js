import _ from "lodash";

export default function removeTaskHandlerFn(data, setData, cardDetailsObj) {
  const { boardIndex, colIndex, cardIndex } = cardDetailsObj;
  const data0 = _.cloneDeep(data);

  data0.boards[boardIndex].columns[colIndex].tasks.splice(cardIndex, 1);

  setData(data0);

  return;
}
