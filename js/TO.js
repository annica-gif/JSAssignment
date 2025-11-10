/*
let name = prompt("Name your character");

let nameLength = name.length;
console.log("Namnet har " + nameLength + " bokstäver. Du har " + (20 - nameLength) + " bokstäver kvar.");
name.slice(0, 20)
charName = prompt("Name your character");
console.log(charName);



const button=document.getElementById("buttonTest");
button.addEventListener("click",(input)=>{
  console.log("I got clicked!");
})

/*
let kmh= 72;
let ms = kmh/3.6;
console.log(ms);

let minute =3
let second = minute * 60;
console.log(second);


let x = 11
let y = 4
let answer = (x / y);
console.log(answer);

let modulo = (25 % 4);
console.log(modulo );


let x = 11
let num = negative number
let quotation = (x * y);
console.log(quotation);


let num = 11
let negation = -num
console.log(negation);

let sumSeconds= 111
let minutesLeft= 60 seconds;
let remainderSeconds = (111 % 60)

console.log(minute + remainderSeconds);

let number= 111
let minute = 1
let secondsLeft = (111 % 60)
let message = ("Det är " + minute + " minut och " + secondsLeft + " sekunder kvar.")

console.log(message);

//let second = minute

function move (moveForward)
function turn (turnRight)
{
  console.log(moveForward)
  console.log(moveForward)
  console.log(moveForward)
  console.log(turnRight)
  console.log(turnRight)
  console.log(turnRight)
  console.log(turnRight)
  console.log(turnRight)
  console.log(moveForward)
  console.log(moveForward)
  console.log(moveForward)
  console.log(turnRight)
  console.log(turnRight)
  console.log(turnRight)
  console.log(moveForward)
  console.log(turnRight)
  console.log(turnRight)
  console.log(moveForward)
}


function move(moveForward, turnRight) {
  for (let i = 0; i < 3; i++) console.log(moveForward);
  for (let i = 0; i < 5; i++) console.log(turnRight);
  for (let i = 0; i < 3; i++) console.log(moveForward);
  for (let i = 0; i < 3; i++) console.log(turnRight);
  console.log(moveForward);
  for (let i = 0; i < 2; i++) console.log(turnRight);
  console.log(moveForward);
}


function repeat(action, times) {
  for (let i = 0; i < times; i++) console.log(action);
}

function move(moveForward, turnRight) {
  repeat(moveForward, 3);
  repeat(turnRight, 5);
  repeat(moveForward, 3);
  repeat(turnRight, 3);
  repeat(moveForward, 1);
  repeat(turnRight, 2);
  repeat(moveForward, 1);
}

function sayManyThings (){
  console.log("i can say one thing.");
  return;
  console.log("but I can say many.");
}
*/
import * as string_decoder from "node:string_decoder";
//
//const button=document.getElementById("buttonTest");
//button.addEventListener("click",(input)=>{
//  console.log("I got clicked!");
//})

//let refDiv=document.getElementById('wrapperDiv');

//

//Hämta elementet med id "wrapperDiv"
//const wrapperDiv = document.getElementById("wrapperDiv");

// Hämta knappen
//const buttonTest = document.getElementById("buttonTest");

// Lägg till en händelse: när man klickar på knappen
/*buttonTest.addEventListener("click", function() {
  console.log("Button clicked!");
  console.log("Wrapper element säger hej:", wrapperDiv);
});/*
/*
// Hämta element
const wrapperDiv = document.getElementById("wrapperDiv");
const buttonTest = document.getElementById("buttonTest");

// Lägg till klick-händelse
buttonTest.addEventListener("click", function() {
  // 1. Skapa nytt <p>-element
  const newParagraph = document.createElement("p");

  // 2. Tilldela textinnehåll eller klass
  newParagraph.textContent = "hello class!";
  // newParagraph.classList.add("myClass");

  // 3. Töm wrapperDiv (ta bort tidigare innehåll)
  wrapperDiv.innerHTML = "";

  // 4. Lägg till det nya elementet
  wrapperDiv.appendChild(newParagraph);
});
/*

 */
//
//let refDiv = document.createElement("wrapperDiv");
//let tempPara =HTMLParagraphElement=document.createElement(tagName: "p");
//tempPara.textContent = "Hello Class";
/*

*/
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
const divWrapper=document.getElementById("wrapperDiv");
const ulTemp= document.createElement("ul");
fruits.forEach(fruit => {
  let liTemp = document.createElement("li");
  liTemp.textContent = fruit;
  ulTemp.appendChild(liTemp);
})

divWrapper.appendChild(ulTemp);

//const divWrapper = document.getElementById("div");
//divWrapper.appendChild(fruits);

removeRef.remove();
const wrapperRef =document.getElementById("wrapperDiv");
const inputAge  =document.getElementById("Age");
const age = Number(inputAge.value);

if(age > 10){
  let para1 = document.createElement("p");
  para1.textContent = "Hej du är redo för äventyr";
  wrapperRef.appendChild(para1);
    createPTag( "Hej du är tillräckligt ung")
}else{
  //let para1 = document.createElement("p");
  //para1.innerText = "Hej du är för liten";
  //para1.classList.add("remove");
  //wrapperRef.appendChild(para1);
}
function createPTag(stringIn){
  let para1 = document.createElement("p");
  para1.innerText = stringIn;
  para1.classList.add("remove");
  wrapperRef.appendChild(para1);
}

const button2 = document.getElementById("button2");
button2.addEventListener("click", () =>{
let removeElements = document.getElementsByClassName("remove");
removeElements = removeElements.filter(removeElement => removeElement.classList.contains("remove"));
})

//let result;

//fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
 // .then(res => res.json())
 // .then(data => console.log(data));

//console.log(result);

let result;

await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  .then(res => res.json())
  .then(data => result = data);

result.meals.forEach(meal => console.log(meal.strMeal));
