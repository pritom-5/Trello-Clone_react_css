export default function getActiveBoardNameIndex(data) {
  let activeBoardIndex = data.boards.findIndex((item) => item.isActive);
  if (activeBoardIndex === -1) {
    activeBoardIndex = 0;
  }
  const activeBoardName = data.boards[activeBoardIndex].name;

  return { activeBoardIndex, activeBoardName };
}
