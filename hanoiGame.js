var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HanoiGame = function () {
  this.stacks = [[1,2,3], [], []];
};

HanoiGame.prototype.isWon = function () {
  return (this.stacks[0].length === 0 &&
    (this.stacks[1].length === 3 || this.stacks[2].length === 3));
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  if (this.stacks[startTowerIdx].length === 0) {
    return false;
  } else if (this.stacks[endTowerIdx].length === 0) {
    return true;
  } else {
    return (this.stacks[startTowerIdx][0] < this.stacks[endTowerIdx][0]);
  }
};

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    var piece = this.stacks[startTowerIdx].shift();
    this.stacks[endTowerIdx].push(piece);
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function (callback) {
  this.print();
  var that = this;
  reader.question("Where do you want to move from, fool?", function(answer) {
    reader.question("Where do you want to move to, fool?", function(answer2) {
      callback(parseInt(answer), parseInt(answer2));
    });
  });
};

HanoiGame.prototype.run = function (completionCallback) {
  if (this.isWon()) {
    completionCallback();
  } else {
    var that = this;
   this.promptMove(function (int1, int2) {
     var success = that.move(int1, int2);
     if (success) {
       that.run(completionCallback);
     } else {
       console.log("Bad move!");
       that.run(completionCallback);
     }
   });
 }
};

var game = new HanoiGame();

game.run(function () {
  console.log("You win");
  reader.close();
});
