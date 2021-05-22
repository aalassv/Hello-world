//Variables

// var(global), let(value constantly change), conts(unchangeable)
//var ages = 30;
//conts agees = 30;
//let age = 30;

//Some uses of consolog
//console.log(age);
//console.log(ages);
//console.log(agees);
//console.error('This is an error');

/*
//Data types

//Strings, Numbers, Boolean, null, undefined, symbol

const names = 'Jhon';
const ages = 30;
const isCool = true;
const rating = 4.5;
const x = null;
let z;

console.log(typeof age);

//Concatenation
console.log('My name is ' + names + ' and I am ' + ages);
//Template string
const hellos = `My name is ${names} and my age is ${ages}`;

console.log(hellos);
console.log(z);


const s = 'Hello world!';
const e = 'tecnology, computers, it, code';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(5));
console.log(s.split('')); //creating a array
console.log(e.split(', '))// creating a array 



//Arrays variables that hold multiples values

// using  the constructors to create an array

const numbers = Array(1,2,3,4,5);
console.log(numbers);

// using the common form to create an array BRACKETS []

const fruit = ['apples', 'oranges', 'pears',10, true, false];
console.log(fruit);
// Access through the array
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[4]);
// Adding some to the array
fruit [4] = 'grapes';
// Adding more to the end push
fruit.push = 'mangos';
// Adding  to the beginning 
fruit.unshift = 'cherry's'
// deleting something
fruit.pop();
console.log(fruit);
console.log(Array.isArray(fruit));
console.log(fruit.indexOf(fruit));

*/
/*
const person = {
    firstName: 'Jhon',
    lastName: 'Alas',
    age:30,
    hobbies:['Skate','Pool'],
    address:{   
        street:'50 main st',
        city: 'Boston',
        state: 'MA' 
    }
}
console.log(person.firstName)
console.log(person.hobbies[0])
console.log(person.address.state);

*/
//Dealing with objects
/*
const todos =[
    {
        id:1,
        text:'take the trash out',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with the boos',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted: false
    }
];
console.log(todos[1].text)
/*
//JASON is a data format, full stack format 
//how to convert to JASON format to send to Server 
const todosJASON = JSON.stringify(todos);
console.log(todosJASON);
*/
/*
//FOR LOOPS
//Iterator assignment, condition, incremental
for (let i = 0; i <=10; i++){
    console.log(`For loop enumerator: ${i}`);
}
//WHILE LOOPS
let i =11
while (i <= 20){
    console.log(`For loop enumerator from 10: ${i}`);
    i++;
}

*/
/*
//loop through Array

for (let i = 0; i < todos.length; i++){
    console.log(todos[1].text);
}
*/
/*
//***************************
 //Javascript exercises 01
//check two numbers if one 100 true or is sum of both give 100 true.
let checkTwoNumbers = (a, b) => a === 100 
|| b === 100 || (a + b) === 100; 

console.log(checkTwoNumbers(10, 100));
console.log(checkTwoNumbers(10, 30));
console.log(checkTwoNumbers(100, 100));

console.log(checkTwoNumbers(50,50));
console.log(checkTwoNumbers(25,75));

//exercises 02
//Write a javascript program to obtain the file extension of a file

let getFileExt = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExt('pdfacrobat.pdf'));


// exercises 
//Write a Javascript program to replace every character in a given string
//- with the character followed it in the alphabet

//create of two functions
//String.fromCharCode
//CharCodeAt


const moveForc = (str) => str
.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
.join('');

console.log(moveForc('mis Dato'))

*/
/*
//exercises 04

//create a Javascript program to get the current date.
//Expected format
//mm-dd-yyyy

const getNewDayfor =(date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth();
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(getNewDayfor());

const getAlsoSecon = (date = new Date()) =>{
    const days1 = date.getDate();
    const months1 = date.getMonth( );
    const years1 = date.getFullYear( );
    const minutes1 = date.getMinutes( );
    const seconds1 = date.getSeconds( );
    return `${days1}/${months1}/${years1}/${minutes1}/${seconds1}`
}
console.log(getAlsoSecon());


//exercises 05
//create a Javascript program to create a New string adding "New"
//in front of given string, If the given string begins with New alreay
// then return the original string.

const addNew = (str) => 
str.indexOf(`New`) === 0 ? str : `New ${str}`;

console.log(addNew('N El PP'));

*/
//redu.
// 01
// const twoNumbersCheck = (a, b) =>  a === 100 || b === 100
// || (a + b) === 100;
// console.log(twoNumbersCheck(30,65))
// console.log(twoNumbersCheck(100, 0))
// console.log(twoNumbersCheck(50, 50))
// console.log(twoNumbersCheck(30,70))

// //02
// const getExtension = (str) => str.slice
// (str.lastIndexOf('.'));
// console.log(getExtension('javac.pdf'));
// console.log(getExtension('javac.html'));

//03

// const changeChar = (str) =>
//     str
//         .split('')
//         .map(char => String.fromCharCode(char.charCodeAt
//             (0) + 1))
//         .join('');

// console.log(changeChar('Texto'))

//04
/* const getAlsoSecon = (date = new Date()) => {
  const days1 = date.getDate();
  const months1 = date.getMonth();
  const years1 = date.getFullYear();
  const minutes1 = date.getMinutes();
  const seconds1 = date.getSeconds();
  return `${days1}/${months1}/${years1}/${minutes1}/${seconds1}`;
};
console.log(getAlsoSecon()); */

//Matthew exercisers

for (var i = 1; i <= 100; i++) {
  if ((i % 3 == 0) & (i % 5 == 0)) {
    console.log("Fizz Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else console.log(i);
}
