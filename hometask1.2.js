'use strict'
//Наслідування через конструкцію Object.create()
var Animal = {
  constructor: function (name, age, region, sound) {
    this.name = name;
    this.age = age;
    this.region = region;
    this.sound = sound;
    this.say = function() {
      console.log("Hi, my name is " + this.name + ", " + this.sound + "!")
    };

    return this;
  }
};

var Dog = Object.create(Animal).constructor("Doge", 5, "Lviv", "Bark");
Dog.goAway = function (place) {
  console.log("Go " + place);
};

var Cat = Object.create(Animal).constructor("Kitty", 3, "NY", "Meow");
var Woodpecker = Object.create(Animal).constructor("Woody", 2, "Toronto", "Knock")

Dog.say();
Cat.say();
Woodpecker.say();

Dog.goAway('home');

function getType(object) {
  if (object.hasOwnProperty('say')) {
    return "Object is Animal";
  } else {
    return "Not an animal";
  }
};
console.log(getType(Dog));

function getType2() {
  if (this.hasOwnProperty('say')) {
    return "Object is Animal";
  } else {
    return "Not an animal";
  }
};

console.log(getType2.call(Cat));
