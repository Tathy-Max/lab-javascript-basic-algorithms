// Iteration 1: Names and Input

let hacker1 = "tathy"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "ivan"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`); 
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
     }

// Iteration 3: Loops

//console.log(hacker1.toUpperCase().split("").join(" "));
//console.log(hacker2.split('').reverse().join(''));
// perguntar a Karen se o join e que "acrescenta" o resultado, com espaco e sem espaco

let hacker1Name = "";
for(let i=0; i < hacker1.length; i++) {
  hacker1Name += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Name)


let hacker2Name = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Name += hacker2[i];
}
console.log(hacker2Name);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 



