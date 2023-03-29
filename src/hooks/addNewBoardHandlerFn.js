import _ from "lodash";

// type -> add, edit, delete
export default function addNewBoardHandlerFn(
  data,
  setData,
  newBoardObj,
  type,
  boardIndex = 0
) {
  // deep copy
  const data0 = _.cloneDeep(data);
  switch (type) {
    case "add":
      data0.boards.push(newBoardObj);
      break;
    case "edit":
      data0.boards[boardIndex] = newBoardObj;
      break;
    default:
      break;
  }

  setData(data0);
}
