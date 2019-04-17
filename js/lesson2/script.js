// used in lesson2.html

// strings
var name = 'codebar';

console.log(name + ' is amazing!');

// numbers
var pi = 3.14;

console.log('The value of pi: ' + pi);

// objects - in python we call these dictionaries
var person = {
  first_name: 'Archibald'
};

console.log('Hello '+ person.first_name + '!');
console.log('Hello '+ person['first_name'] + '!');

// booleans
var codebarIsAmazing = true;
var weatherIsAmazing = false;

console.log('Is codebar AWESOME? ' + codebarIsAmazing);
console.log('Is the weather in London amazing? ' + weatherIsAmazing);

// Expressions
// math
var x = 20;
var y = 10;
var addition = x + y;

console.log('Addition: x + y = ' + addition); //Addition: x + y = 9

var substraction = x - y;
console.log('Substraction: x - y = ' + substraction); // Substraction: x - y = 3

var multiplication = x * y;
console.log('Multiplication: x * y = ' + multiplication); // Multiplication: x * y = 18

var division = x / y;
console.log('Division: x / y = ' + division); // Division: x / y = 2

var coaches = 20;
var students = 24;
var pizzas = 25;
var totalPeople = coaches + students;
var moreStudents = students > coaches;
console.log('Are there more students than coaches? ' + moreStudents);

var lessStudents = students < pizzas;
console.log('Are there fewer students than pizza? ' + lessStudents);

var enoughPizzas = (students + coaches) < pizzas;
console.log('Do we have enough pizzas for everybody? ' + enoughPizzas);

if (totalPeople > pizzas) {
  console.log('We have more people than pizzas.');
} else {
  console.log('We have waaay too much pizza. This can never be bad! :)');
}
var myAge = 22;
var minDrivingAge = 18;
console.log('Am I old enough to drive? ' + (myAge > minDrivingAge) );

// Loops

// The while loop
var i = 1;
var total = 0;

while (i < 11) {
  total = total + i;
  i = i + 1
}

console.log('Total: ' + total);

// The for Loops
var i = 1;
var total = 0;

for (i = 1; i <= 10; i++) {
  total += i;
}

console.log('Total: ' + total);

// Arrays
/* An array is a simple data structure. It can hold a list of elements of the
same or different types (e.g. strings, numbers, booleans). In an array each
element can be accessed using the index. */
var animals = ['dog', 'cat', 'rabbit', 'horse', 'elephant', 'monkey'];

console.log(animals)

console.log(animals.length) // Returns the size of the array, 6

for (var i = 0; i < animals.length; i++) {
  var animal = animals[i];
  console.log(animal);
}

animals.unshift('cow'); // adds an element to the beginning of the array
animals.push('zebra'); // adds an element to the end of the array

console.log(animals);

console.log(animals.pop()) // removes and returns the last element of the array
console.log(animals)

console.log(animals.shift()) // removes and reutrns the first element of the array
console.log(animals)

// Ordering

var names = ['Jane', 'Barry', 'Helen', 'David', 'Sam'];
names.sort();
console.log(names);

console.log(animals.sort().reverse());

/* const sortNumbersAscending = (a,b) => {
  return a - b;
} */

function sortNumbersAscending(a, b) {
  return a - b;
}

var nums = [1, 5, 3, 19, 2, 10];

//nums.sort(sortNumbersAscending).reverse();

//console.log(nums);

function sortNumbersDescending (a, b) {
  return b - a;
}

nums.sort(sortNumbersDescending)
console.log(nums);

var fruitAndVeg = ['apple', 'orange', 'banana', 'kiwi', 'avocado', 'celery', 'aubergine'];
var noAvocados = [];
var i = 0;

/*while (i < fruitAndVeg.length) {
  if (fruitAndVeg[i] !== 'avocado') {
    noAvocados.push(fruitAndVeg[i]);
  }
  i++;
}

console.log(noAvocados)
*/

for (var i = 0; i < fruitAndVeg.length; i++) {
  if (fruitAndVeg[i] !== 'avocado') {
    noAvocados.push(fruitAndVeg[i]);
  }
}

console.log(noAvocados)

// FizzBuzz
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
}

function listDomElements() {
  var children = document.body.childNodes;
  var i;

  for (i = 0; i <  children.length; i = i + 1) {
    console.log(children[i]);
  }
}

/*
document.getElementsByTagName('h1');

var description = document.getElementById('description');
console.log(description.innerHTML);

document.createElement('<tagName>');
document.createTextNode('<text>');
document.appendChild('<node>');
*/
