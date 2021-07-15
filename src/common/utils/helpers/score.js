export const getScore = (scores) => {
  const frequency = {};
  let max = 0;
  let result;
  for (const v in scores) {
    frequency[scores[v]] = (frequency[scores[v]] || 0) + 1;
    if (frequency[scores[v]] > max) {
      max = frequency[scores[v]];
      result = scores[v];
    }
  }

  return result;
};
