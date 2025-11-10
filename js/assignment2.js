/*let customerName = "Ulrika";
let customerAge = 50;
let hasCash = false;
let hasCard = true;

function validateAge (name, age, cash, card) {
 console.log("Welcome" + name);
  if (age<12){
console.log("Too young for coffee! Maybe try hot chocolate?");
    } else {
  console.log ("Here is your small latte.");

  if(age<12)
    console.log("You can order coffee!");
}
  function validatePayment(hasCash, hasCard) {
    if (hasCard) {
      console.log("You paid with card.");
    } else if (hasCash) {
      console.log("You paid with cash.");
    } else {
      console.log("You have no way to pay.");
    }
  }
  if(age<12)
    console.log ("Here is your hot chocolate");
  if(age >= 12 && age < 18)
    console.log ("Here is your small latte.");

  if (age < 13) {
    console.log("Barn");
  } else if (age >= 13 && age < 18) {
    console.log("Tonåring");
  } else if (age >= 18 && age < 130) {
    console.log("Vuxen");
  }}

  if (age < 12) {
    console.log ("Here is your hot chocolate")
  } else if (age >= 12 && age < 17) {
    console.log ("Here is your small latte.");
  } else if (age >= 18) {
    console.log ("Here is your large cappuccino.");
  }

console.log(validateAge(customerName, customerAge, hasCash, hasCard));

function validatePayment(hasCash, hasCard) {
  console.log(hasCash);
}

console.log(validatePayment(hasCash, hasCard));
console.log(hasCash);
console.log(hasCard);
/*/

let customerName = "Ulrika";
let customerAge = 50;
let hasCash = false;
let hasCard = true;

function validateAge(name, age) {
  console.log("Welcome " + name + "!");

  if (age < 12) {
    console.log("Too young for coffee! Maybe try hot chocolate?");
    console.log("Barn");
    console.log("Here is your hot chocolate.");
  } else if (age < 18) {
    console.log("Tonåring");
    console.log("Here is your small latte.");
  } else if (age < 130) {
    console.log("You can order coffee");
    console.log("Here is your large cappuccino.");
  } else {
    console.log("Age not valid.");
  }
}

function validatePayment(hasCash, hasCard) {
  if (hasCard) {
    console.log("You paid with card.");
  } else if (hasCash) {
    console.log("You paid with cash.");
  } else {
    console.log("You have no way to pay.");
  }
}
const btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
  btn.classList.toggle("clicked"); // växlar klass vid klick
});
// ---- Kör allt ----
validateAge(customerName, customerAge);
validatePayment(hasCash, hasCard);

/*
// Funktion som slumpar ett tal mellan 1 och 6
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1; // 1–6
  if (randomNumber === 6) {
    return "You get a free muffin with your coffee!";
  } else {
    return "No extras today, enjoy your drink!";
  }
}

// Koppla till knappen
const btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
  const result = rollDice();
  alert(result); // visar meddelandet som popup
  console.log("Rolled number:", result);
});

let tossDice = document.getElementById("number");
if (number <=5) {
  console.log ("No extras today, enjoy your drink!")
} else if (number = 6) {
  console.log ("You get a free muffin with your coffee!");
}



/*
function validateDice(number =) {
}
let Dice = document.getElementById("rollDice");
console.log(Dice);
if (=> 6) {
  console.log("You get a free muffin with your coffee!");
} else if (<= 5) {
  console.log("No extras today, enjoy your drink.");
  }

 */
// Funktion som slumpar ett tal mellan 1 och 6
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1; // 1–6
  if (randomNumber === 6) {
    return "You get a free muffin with your coffee!";
  } else {
    return "No extras today, enjoy your drink!";
  }
}

// Koppla till knappen
const knapp = document.getElementById("myButton");

btn.addEventListener("click", () => {
  const result = rollDice();
  alert(result); // visar meddelandet som popup
  console.log("Rolled number:", result);
});
