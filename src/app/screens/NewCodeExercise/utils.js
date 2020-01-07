/* eslint-disable no-plusplus */
const parse = {
  1: {
    0: 0
  },
  2: {
    0: 1,
    1: 0
  },
  3: {
    0: 2,
    1: 1,
    2: 0
  },
  4: {
    0: 3,
    1: 2,
    2: 1,
    3: 0
  },
  5: {
    0: 4,
    1: 3,
    2: 2,
    3: 1,
    4: 0
  },
  6: {
    0: 5,
    1: 4,
    2: 3,
    3: 2,
    4: 1,
    5: 0
  }
};

export const createBoard = (x, y) => {
  const parser = parse[y];
  const board = [];
  for (let i = 0; i < y; i++) {
    board.push([]);
    for (let j = 0; j < x; j++) {
      board[i].push({ y: parser[i], x: j });
    }
  }
  return board;
};
