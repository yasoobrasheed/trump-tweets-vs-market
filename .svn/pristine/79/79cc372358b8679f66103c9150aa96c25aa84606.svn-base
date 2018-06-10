export function findMinMax(data, index) {
  return data.reduce((acc, day) => {
    if (!isNaN(day[index])) {
      acc.max = Math.max(acc.max, parseInt(day[index], 10));
      acc.min = Math.min(acc.min, parseInt(day[index], 10));
    }
    return acc;
  }, {max: -Infinity, min: Infinity});
}

export function searchTweets(data, text) {
  let ret = [];
  data.forEach((day) => {
    day.tweets.forEach((tweet) => {
      if (tweet.includes(text)) {
        ret = ret.concat([(day.date)]);
      }
    });
  });
  return ret;
}
