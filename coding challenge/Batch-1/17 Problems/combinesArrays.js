let arr = [[2,3,4],[6,4,9],[34,6,4]]
function addArrays(...args){
   return args.reduce((prev, curr) => prev.concat(curr));
 }
 console.log(addArrays(arr));