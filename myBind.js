Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    fn.apply(context);
  };
};

function Cat (name) {
  this.name = name;
}

function Duck (name) {
  this.name = name;
}

Cat.prototype.meow = function () {
  console.log(this.name + " says meow");
};

var kitty = new Cat('kitty');
var ducky = new Duck('ducky');
kitty.meow();
var meowLater = kitty.meow.bind(ducky);
meowLater();
kitty.meow.myBind(ducky)();
