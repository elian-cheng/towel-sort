
// You should implement your task here.

module.exports = 

function towelSort (matrix) {
  const arr = [];
   if (!matrix) {
           return []; 
       }
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
    arr.push(...matrix[i]);
  }
    else {
    arr.push(...matrix[i].reverse());
  }    
  }
   return arr;
}
