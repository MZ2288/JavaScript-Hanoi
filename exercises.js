function Clock () {
  var newDate = new Date();
  this.hours = newDate.getHours();
  this.minutes = newDate.getMinutes();
  this.seconds = newDate.getSeconds();
}

Clock.prototype.printTime = function () {
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype._tick = function () {
  this.seconds += 1;
  this.printTime();
};
