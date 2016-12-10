var i = 0;
var sumArray = [];

while (i < 1000) {
  if ((i % 3 == 0) || (i % 5 == 0)) {
    sumArray.push(i);
  }
  i = i+1;
}

//console.log("SUM is: " + sum(sumArray));

function addNum(a, b) {
  return a + b;
}

console.log(sumArray.reduce(addNum));
