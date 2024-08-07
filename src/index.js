
module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix === undefined || matrix.length === 0) { return result; }
  if (!Array.isArray(matrix[0])) { return matrix };
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {result = result.concat(matrix[i]);} else {result = result.concat(matrix[i].reverse());
    }
  }
  return result;
}
