//start and end of the array
function generateArray(start, end) {
  let array = [];
  const step = start <= end ? 1 : -1;
  
  for (let i = start; i !== end + step; i += step) {
      array.push(i);
  }
  
  return array;
}
//testing the above code
console.log(generateArray(4, 7));
console.log(generateArray(-4, 7));
