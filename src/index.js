// You should implement your task here.

module.exports = function towelSort(matrix) {
    let towel = [];
    if (matrix === undefined) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            towel.push(matrix[i]);
        } else {
            towel.push(matrix[i].reverse());
        }
    }
    var r = [].concat(...towel);
    return r;
};
