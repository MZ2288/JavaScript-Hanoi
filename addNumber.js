var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function (sum, numsLeft, completionCallback) {
  if(numsLeft > 0) {
    reader.question("What number do you want to add?", function(answer) {
      var intValue = parseInt(answer);
      sum += intValue;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else if(numsLeft === 0) {
    completionCallback(sum);
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
