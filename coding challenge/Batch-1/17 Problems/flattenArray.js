let arr = [[1,2,3],[4,5,6],[7,8,9]];

let flattenArray = (arr) => arr.reduce((prev, current) => prev.concat(current));

console.log(flattenArray(arr));
