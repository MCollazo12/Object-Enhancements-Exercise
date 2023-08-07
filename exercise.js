/*
ES5 code:   
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

//Refactored into ES2015
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

/*
ES5 code:
var favoriteNumber = 42;
var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"
*/

//Refactored into ES2015
let favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!',
};

/*
ES5 code:
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName " + "says bye!";
  }
}
*/

//Refactored into ES2015
const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },

  sayBye() {
    return this.firstName + ' says bye!';
  },
};

//createAnimal function
function createAnimal(species, verb, noise) {
  return {
    species,
    //computed property name in a method -> species.verb() returns species noise
    [verb]() {
      return noise;
    },
  };
};
