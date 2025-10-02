//detta ska ej printas/*
// console.log("Hello World!");
console.log('Annica Gunnrin');
console.log('2 oktober 2025');
console.log('annica.gunnrin@medieinstitutet.se');

console.log('First.');
console.log('Second.');

console.log('This is line 1.');
console.log('This is line 2.');
console.log('This is line 3.'); console.log('This is line 4.');
console.log('This is line 5.');
console.log('This is line 6.');

let x = 5;
let x1 = 3;


//console.log("this is an example");

/*

console.log("tjabba tjena");

const examplestring = "Hello World";
console.log(examplestring);

console.log("let x :number = 5");

console.log("var stringoutput :number = 14");
x = "b";
y = 2;
z =x+y;
console.log(z);

let gold = 50
gold = gold +10
gold +=5;
console.log(gold);


let kmh=72;
let ms= kmh/3.6;
console.log(ms);


let int = "Hello";

function calculatecirclearea(radius){
const pi= Math.PI;
  return pi*radius*radius;
}
const radius= 2;
const area = calculatecirclearea(radius);
console.log(area);

function calculate(input){
  const negnumber = input*-1;
  return negnumber;
}
console.log
(calculate(input: 5));

*/

function calculateBMI (weight,height){
  return weight/(height*height);
}
  let weight= 70;
  let height= 1.82;
  let BMI =  calculateBMI(weight,height);
  //console.log(BMI);

      console.log(`${BMI.toFixed(0)}`);

//let firstName = "Ben";let  172;

//---/*

const string = "Green bottles hanging on the wall"
let numberOfbottles = 10;
const string2="And if one green bottle, should accidentally fall, there will be"+ --numberOfbottles + " ";
console.log(string2);
console.log (numberOfbottles + " " + string +  ". " + numberOfbottles + " " + string);
--numberOfbottles;
console.log(numberOfbottles);
numberOfbottles = numberOfbottles - numberOfbottles;

let bool= true;
console.log(bool);
console.log(!bool);

//const age  =24;
//const birthyear=2002;

//console.log(age ==24 && birthyear == 2002);
//console.log(age ==24 || birthyear == 2002);
//let condition  = age ==26 || birthyear == 2002;
//console.log(condition);

//function getAge() {
//  return age;
//}
//let ages = getAge();
//console.log(ages);
//let results = getAge;

//results = 26;
//console.log(results);

//const birthyear = 2000;
//console.log(birthyear == 2000);
//let IsChild = 0-10;
//console.log(IsChild);
//let isTeenager = 11-17;
//console.log(isTeenager);
//let isAdult = 18-150;
//console.log(isAdult);

const birthyear = 2023;
const currentYear = new Date().getFullYear();
let age = currentYear - birthyear;

let isChild = (age >=0 && age <= 10);
let isTeenager = age >= 11 && age <= 17;
let isAdult = age >= 18;
//console.log('currentYear:', currentYear);
//console.log('calculated age:', age);
  console.log("you are a child:" + isChild);
  console.log("you are a Teenager:" + isTeenager);
  console.log("you are an Adult:" + isAdult);

/*const age : number = 81 () {
   console.log("hello world")
  if(age >= 18 && age >)
 }
 console.log(age);

const age : number =22;
const month : number = 30;
let button: boolean =true;

if(button == true) {
  console.log("clicked");
}else{
  console.log("not clicked");
}

let clicked= button? console.log("Ternary clicked") : console.log("Ternary not clicked");
 */

// ----- Variabler -----

let birthYear2 = 2000;     // ändra gärna
let favoriteNumber = 21;  // ändra gärna

// ----- Beräkna ålder -----
const today = new Date();
const currentYear2 = today.getFullYear();
let age2 = currentYear2 - birthYear2;

// ----- Kontrollera kategori -----
let ageMessage = "";
if (age2 <= 10) {
  ageMessage = "You are a child.";
} else if (age <= 17) {
  ageMessage = "You are a teenager.";
} else {
  ageMessage = "You are an adult.";
}

// ----- Vilket tal är störst? -----
let greaterMessage = "";
if (age > favoriteNumber) {
  greaterMessage = "The greater number is: " + age2;
} else if (favoriteNumber > age) {
  greaterMessage = "The greater number is: " + favoriteNumber;
} else {
  greaterMessage = "Both numbers are equal: " + age2;
}

// ----- Favorittalet jämnt eller udda -----
let numberMessage = "";
if (favoriteNumber % 2 === 0) {
  numberMessage = "Your favorite number is an even number.";
} else {
  numberMessage = "Your favorite number is an odd number.";
}

// ----- Skriv ut på sidan -----
let output = `
${ageMessage}
${greaterMessage}
${numberMessage}
`;

console.log("ageMessage:");
console.log("favourite number:");
//document.getElementById("output").textContent = output;/*

/*function makeLasagna():void {
    console.log("Fry meat.")
console.log("Cut onions.");
console.log("Fry onions.");
console.log("Add tomato sauce." );
console.log("Add spices.");
console.log("Boil.");
}
makeLasagna()
let isHungry:boolean = false;
// breakfast
if(isHungry){
        makeLasagna();
}
isHungry = true;
//lunch
{  makeLasagna();}
if isHungry = true;
//dinner
{  makeLasagna();{
if isHungry = true;
}

let listExample:number = [1,1,2,3]
  listExample.forEach(char:number => console.log(char)) => {})
  console.log(listExample[]);

 */
function sayManyThings() {
  console.log("I can say one thing.");
  console.log("And I can say a second thing.");}
