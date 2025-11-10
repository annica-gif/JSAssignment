//detta ska ej printas/*
// console.log("Hello World!");
/*
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

let name = prompt("Name your character");
let nameLength = name.length;
console.log("Namnet har " + nameLength + " bokstäver. Du har " + (20 - nameLength) + " bokstäver kvar.");
  console.log('');

function calculateBMI (weight,height){
  return weight/(height*height);
}
let weight= 70;
let height= 1.82;
let BMI =  calculateBMI(weight,height);
//console.log(BMI);

console.log(`${BMI.toFixed(0)}`);

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

console.log("ageMessage:");
console.log("favourite number:");

function makeLasagna()   {
console.log("Fry meat.")
console.log("Cut onions.");
console.log("Fry onions.");
console.log("Add tomato sauce." );
console.log("Add spices.");
console.log("Boil.");
}
makeLasagna()
let isHungry= false;
// breakfast
if (isHungry){
makeLasagna();
}

 */

//let randomNumber = Math.floor(Math.random() * 6);

//let randomNummer = (Math.random(1, 6)).toString(13);
//for (let i = 0; i <= randomNummer;) {
//  console.log(randomNummer);
//}

//let randomNummer = Math.floor(Math.random() * 6) + 1;
//console.log(randomNummer);

/* övning 1: min
 for (let i = 0; i < 13; i++) {
  let randomNummer = Math.floor(Math.random() * 6) + 1;
  console.log(randomNummer);
}

//Filips lösning (kan köra 0 >13 också!)
for(let i:number = 0; i < 13; ++i){
  console.log(Math.floor(Math.random(1,6)*6)) + 1;
})


 //övning 2 - min
//for (let i = 0; i < 1024; * 2;) {
//  let num = Math.floor(Math.floor() * 2);
//  console.log(num)
//}

//filip
//for(let i = 1; i <= 1024 ; 1*=2){
//  console.log(i);
//}

//övning 3:
for(let i number = 10; i >= 0; i -= 1) {

}

function numPow(num1, num2) {
 // return num1**num2;
  let sum = num1;
  for(let i = 1; i <= num2; ++i){
    sum = sum * num1;
  }
  return sum;
}
console.log(numPow(4,24))


//array, lista:
//const listEx = [1,1,2,3,5,8];
//console.log(listEx[5]);

const listEx = [1,1,2,3,5,8];
for(let i = 0; i < listEx.length; i++){
  console.log(listEx[i]);
}


listEx.forEach(el: = number string => console.log(el));


for (let i = 0; i < 10000; i++) {
  let randomNummer = Math.floor(Math.random() * 10) + 1;
  console.log(randomNummer);
}
let counts = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0
};

for (let i = 0; i < 10000; i++) {
  let roll = Math.floor(Math.random() * 10) + 1;
  console.log(`Roll ${i + 1}: ${roll}`);

  // Add 1 to that number's count
  counts[roll]++;
}


// Show the final counts
console.log("Results:");
console.log(counts);


//filip:
let randNumList = [];
const numMax= 10000;

for(let i = 0; i < numMax; i++){
  randNumList.push(Math.floor(Math.random()*10));
}
  for(let i = 0; i <= 10; i++){
    let sumRes = 0;
   // for(let j = 0; j < numMax; j++){
    for(let j = 0; j < randNumList.length; j++){}
    if(i == randNumList[j]){
      ++sumRes;
    }
  }
 console.log(i + "has occured :" + sumRes);
}
*/
let result;
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  .then(res => res.json())
  .then(data => result = data.meals)
for(let i = 0; i < result.length; i++){
  console.log(result[i]);
 }
