const d = {
  'archery-mission-lvl': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 5291.706,
    wins: 8,
  },
  'archery-world-mission-1': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 981,
    wins: 6,
  },
  'bubble-woods-mission-1': {
    fails: 19,
    gameId: 'bubble-woods',
    playTime: 1206,
    wins: 9,
  },
  'bubble-woods-mission-lvl': {
    fails: 1,
    gameId: 'bubble-woods',
    playTime: 100,
    wins: 2,
  },
  'candy-bubble-mission-lvl': {
    fails: 6,
    gameId: 'candy-bubble',
    playTime: 1558,
    wins: 6,
  },
};

function grouping(data) {
  const ids = {};

  for (const key in data) {
    const {fails, playTime, wins, gameId} = data[key];
    if (ids[gameId]) {
      ids[gameId].fails += fails;
      ids[gameId].playTime += playTime;
      ids[gameId].wins += wins;
    } else {
      ids[gameId] = {fails, playTime, wins, gameId};
    }
  }

  console.log(Object.values(ids));
}

grouping(d);
