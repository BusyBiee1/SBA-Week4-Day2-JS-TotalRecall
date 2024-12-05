// I. Variables & Datatypes
// A. Q + A

// How do we assign a value to a variable?
// ANS:
// let a = "This Way"

// How do we change the value of a variable?
// ANS:
// a = "that way"

// How do we assign an existing variable to a new variable?
// ANS:
// let b = a

// Remind me, what are declare, assign, and define?
// ANS:
// declare is gving a variable a name and it is in a undefined stated
// example: let x;

// assign is giving a value to a varaible
// ANS:
// example: x = 20;

// define is declaring and assigning a variable. 
// ANS:
// example: let y = 20;

// What is pseudocoding and why should you do it?
// ANS:
// Pseudocoding is a way of quickly putting logic to lay out the steps to handle the logic of the programming before actualy writing the code syntatically

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// ANS:
// 70% or so

/////////////////////////////////////////////////

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// ANS:
let firstVariable;

// Assign it the value of the string "Hello World"
// ANS:
let firstVariablein = "Hello World"

// Change the value of this variable to some number
// ANS:
firstVariablein = 3

// Store the value of firstVariablein a new variable called secondVariable
// ANS:
secondVariable = firstVariablein

// Change the value of secondVariableto any string.
// ANS:
secondVariableto = "any string w"

// What is the value of firstVariable?
// ANS:
// 3

// Create a variable called yourNameand set it equal to your name as a string. 
// Then, write an expression that takes the string "Hello, my name is " and the variable 
// yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
// ANS:
let yourNameand = "Raj";
let newstring = "`Hello, my name is ${yourNameand}'";

///////////////////////////////////////////////////////////////////

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
   const a = 4;
   const b = 53;
   const c = 57;
   const d = 16;
   const e = 'Kevin';
// ANS:
   console.log(a < b);
   console.log(c > d);
   console.log('Name' === 'Name');
   // FOR THE NEXT TWO, USE ONLY && OR ||
   console.log(true || false);
   console.log(false && false && false && false && false || true);
   console.log(false !== false)
   console.log(e === 'Kevin');
   console.log(a < b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
   console.log(a === a < d); // note: the answer is a simple arithmetic equation, not something "weird"
   console.log(48 !== '48');

   ////////////////////////////////////////////////////////////////////

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// ANS:
let animal;
animal = "cow";
if (animal = "cow") {
    console.log("mooooo");
}
else {
    console.log("Hey! You're not a cow.");
}
console.log("\n");
//////////////////////////////////////////////////////////////////

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
//
// ANS:

let aPersonsAge;
aPersonsAge = 18;
if (aPersonsAge >= 16) {
    console.log("Here are the keys!");
}
else {
    console.log("Sorry, you're too young.");
}
console.log("\n");

////////////////////////////////////////////////////////////////

// II. Loops
// Remember: USE letwhen you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// ANS:
for (let i=0; i<=10; i++) {
    console.log(i);
}
console.log("\n");

// Write a loop that will print out all the numbers from 10 up to and including 400
// ANS:
for (let i=10; i<=400; i++) {
    console.log(i);
}
console.log("\n");

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// ANS:
for (let i=12; i<=400; i++) {
    if(i%3 === 0) {
        console.log(i);
    }
}
console.log("\n");

////////////////////////////////////////////////////////////////////////

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// ANS:
for (let i=2; i<100; i++) {
    if(i%2 === 0) {
        console.log(`${i} <-- is an even number`);
    }
    else{
        console.log(i);
    }    
}
console.log("\n");

///////////////////////////////////////////////////////////////////////

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
// ANS:
for (let i=0; i<100; i++) {
    if(i%5 === 0) {
        console.log(`I found ${i}. High five!`);
    }
}
console.log("\n");

//////////////////////////////////////////////////////////////////////

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages
// ANS:
for (let i=0; i<100; i++) {
    if((i%5 === 0) && (i%3 === 0)) {
        console.log(`I found ${i}. High five!`);
        console.log(`I found ${i}. Three is a crowd`);
    }
    else if (i%5 === 0){
        console.log(`I found ${i}. High five!`);
    }
    else if (i%3 === 0){
        console.log(`I found ${i}. Three is a crowd`);
    }
}
console.log("\n");

//////////////////////////////////////////////////////////////////////

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum 
// of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
// ANS:
let bank_account = 0;
for (let i=0; i<=10; i++) {
    bank_account += i;
    console.log(bank_account);
}
console.log(bank_account);
console.log("\n");

// ANS:
bank_account = 0;
for (let i=0; i<=100; i++) {
    bank_account += i * 2;
}
console.log(bank_account);
console.log("\n");

///////////////////////////////////////////////////////////////////

// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called?
// ANS: element

// Do Arrays guarantee those things will be in order?
// ANS: NO

// What real-life thing could you model with an array?
// ANS: collection of things, that are similar kind mostly but does not have to be. such as a colleciton of employees, a name of students, collection of numbers, a group of colors. even a all the nimals kinds in the zoo, etc

////////////////////////////////////////////////////////////////////

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// ANS:
const quotes = ["mary had a little lamp", "jingle bell jingle bell", "once upon a time"]

////////////////////////////////////////////////////////////////////

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// ANS:
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// ANS:
randomThings[2] = "World";
console.log(randomThings[2]);
console.log("\n");

////////////////////////////////////////////////////////////////////

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// ANS:
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// Change the value of "Github" to "Octocat"
// ANS:
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array
console.log(ourClass[4]);
console.log(ourClass);
console.log("\n");

////////////////////////////////////////////////////////////////////

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that 
// are more appropriate. Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? 
// What does mutate mean? Did the .reverse()method return anything?
// ANS:
const myArray = [5, 10, 500, 20];
const savedMyArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("momo");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(`Original Array: ${savedMyArray}`);
console.log(`Mutated Array: ${myArray}`);
console.log("Yes mutated the Array by way of push, pop, shit, unshift etc as mutate means altering the original array ");
console.log("Yes the .reverse method returned a revesed array");
console.log("\n");

////////////////////////////////////////////////////////////////////////

// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
// ANS:
let aNum = 3;
if (aNum <100) {
    console.log(`${aNum}: little number`)
}
else{
    console.log(`${aNum}: big number`)
}
console.log("\n");

//////////////////////////////////////////////////////////////////////

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
// ANS:
aNum = 6;
if (aNum <5) {
    console.log(`${aNum}: little number`)
}
else if(aNum >10) {
    console.log(`${aNum}: log big number`)
}
else{
    console.log(`${aNum}: monkey`)
}
console.log("\n");

//////////////////////////////////////////////////////////////////////

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// -What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
// log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// ANS:
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  console.log(kristynsCloset[2]);
  console.log(`Kristyn is rocking that '${kristynsCloset[2]}', the third item in Kristyn's closet today -> '${Date()}'!`);
  console.log("\n");

// -Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// ANS:
let tempkristynsCloset = kristynsCloset.splice(6,0,"raybans");
//console.log(tempkristynsCloset.splice(1,2));
//console.log(tempkristynsCloset);
//kristynsCloset.push("raybans");
//kristynsCloset.concat(tempkristynsCloset);
console.log(kristynsCloset);
//console.log(kristynsCloset.splice(6,0,"raybans"));
//console.log(`Kristyn is rocking that '${kristynsCloset[2]}', the third item in Kristyn's closet today -> '${Date()}'!`);
console.log("\n");

// -Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// ANS:
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
console.log("\n");

////////////////////////////////////////////////////

// -Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// ANS:
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
// ANS:
console.log(thomsCloset[0][0]);
console.log("\n");

// -In the same way, access one item from Thom's pants array.
// ANS:
console.log(thomsCloset[1][1]);
console.log("\n");

// -Access one item from Thom's accessories array.
// ANS:
console.log(thomsCloset[2][1]);
console.log("\n");

// -Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, 
// jeans and wool scarf!" 
// ANS:
console.log(`Thom is looking fierce in a '${thomsCloset[0][2]}' '${thomsCloset[1][1]}' '${thomsCloset[2][2]}'`)
console.log("\n");

// -Get more specific about what kind of PJs Thom's wearing this winter. 
// Modify the name of his PJ pants to Footie Pajamas.
// ANS
thomsCloset[1][2] = "Footie Pajamas";
console.log(`Toms closet after modfying PJs to Footie Pajamas:  ${thomsCloset}`);
console.log("\n");

/////////////////////////////////////////////////////////////////////

// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter name
// that returns a greeting with the argument interpolated into the greeting? Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
// ANS:
function printGreeting(name) {
    return (`Hello there ${name}`)
}
console.log(printGreeting("Jordan"));
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. 
// The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
// ANS:
function printCoolthat(name) {
    return (`${name} is cool`)
}
console.log(printCoolthat("Captain Reynolds"));
console.log("\n");

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
// ANS:
function calculateCube(singlenumber) {
    return (`cube of ${singlenumber} is ${singlenumber ** 3}`);
}
console.log(calculateCube(5));
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, 
// false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's 
// working. In general, when you write functions, take a minute to test them with different values to make sure 
// they behave the way you want.
// console.log(isVowel("a"));
// => true
// ANS:
function isVowel(aLetter){
    switch (aLetter) {
        case 'a': 
            return true;  
            break;        
        case 'A':
            return true;  
            break;        
        case 'e':
            return true;  
            break;        
        case 'E':
            return true;  
            break;        
        case 'i':
            return true;  
            break;        
        case 'I':
            return true;  
            break;        
        case 'o':
            return true;  
            break;        
        case 'O':
            return true;  
            break;        
        case 'u':
            return true;  
            break;        
        case 'U':
            return true;  
            break;        
        default:
          return false;  
    }     
}
let anInput = 'a';
console.log(`is the input of '${anInput}', a Vowel?: ${isVowel(anInput)}`);
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an 
// array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
// ANS
function getTwoLengths(str1, str2) {
    let aStrAry = [];
    aStrAry[0]= str1.length;
    aStrAry[1]= str2.length;
    return(aStrAry);
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter 
// as an argument: an array of strings. The function should return an 
// array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
// ANS:
function getMultipleLengths(anAry) {
    let anAryOfLengths = [];
    anAry.forEach((item, index) => {
        anAryOfLengths[index] = item.length;        
        //anAryOfLengths[index] = anAry[index].length;
    })
    return(anAryOfLengths);
}
console.log(["hello", "what", "is", "up", "dude"]);
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. 
// If all numbers are the same, it doesn't matter which one is returned. 
// If the two largest numbers are the same, one of them should be returned. 
// Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// ANS:
// Did you use Google and find Math.max()? If so, great job! 
// Very resourceful—keep looking stuff up! However, for this particular question, 
// we need you to submit a solution that does not use Math.max().
// ANS:
function maxOfThree(one, two, three) {
    largestNum = one;
    if (two > largestNum) {
        largestNum = two;
    }
    else if (three > largestNum) {
        largestNum = three;
    }
    return largestNum;
}
console.log(maxOfThree(6, 9, 1));
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. 
// The method should return the longest word in the array. 
// In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
// ANS:
function printLongestWord(anAryOfStr) {
    let longestStrlength = 0;
    let longestStrlengthIndex = 0;
    anAryOfStr.forEach((item, index) => {
        if (item.length > longestStrlength) { 
            longestStrlength = item.length
            longestStrlengthIndex = index;
        }
    })
    return(anAryOfStr[longestStrlengthIndex]);
}
console.log(`Largest string length in ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]:`);
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
console.log("\n");

//////////////////////////////////////////////////////////////////////////////////

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, 
// and we have a user of our website, and we want to store that user's data. 
// The object data structure is a good way to organize the data from our user.
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. 
// Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
// ANS:
const user = {
    name: "john",
    age: 33,
    email: "john@john.com",
    purchased: [] 
  };
  console.log(user);
  console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, 
// update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the 
// agevalue using the postfix operator. Hint: age++
// ANS:
const updatedUserObjemail = {
    ...user, 
    email: "newemail@example.com", 
};
updatedUserObjemail.age++
console.log(updatedUserObjemail);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key location to the object, 
// and give it a value or some-or-other location (a string).
// ANS:
updatedUserObjemail["location"] = "somelocation";
console.log(updatedUserObjemail);
console.log("\n");
/////////////////////////////////////////////////////////////////////////////////

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". 
// Using .push(), add the string "carbohydrates" to the purchased array.
// ANS:
user["purchased"].push("carbohydrates") 
console.log(user);
console.log("\n");
// Our user has purchased an item! They have purchased some "peace of mind". 
// Using .push(), add the string "peace of mind" to the purchasedarray.
// ANS:
user["purchased"].push("peace of mind") 
console.log(user);
console.log("\n");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". 
// Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user["purchased"].push("Merino jodhpurs") 
console.log(user);
console.log("\n");

// Console.log just the "Merino jodhpurs" from the purchasedarray.
// ANS:
console.log(user["purchased"][2]);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that 
// you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.
// Write a friendobject into your userobject and give the friend a name, age, location, 
// and purchased array (empty for now)
// ANS:
user["friend"] = {
        name: "Grace Hopper",
        age: 85,
        location: "NYC",
        purchased: [] 
    }
console.log(user);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// Console.log just the friend's name
// ANS
console.log(user.friend.name);
console.log(user.friend["name"]);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// Console.log just the friend's location
// ANS
console.log(user.friend.location);
console.log(user.friend["location"]);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// CHANGE the friend's age to 55
// ANS
user.friend.age = 55;
console.log(user);
console.log(user.friend);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// ANS:
user.friend.purchased.push("The One Ring");
console.log(user.friend);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.
// ANS:
user.friend.purchased.push("A latte");
console.log(user.friend);
console.log(user.friend.purchased[1]);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), 
// and prints each element to the console.
// ANS:
user.purchased.forEach(item => {
    console.log(item)
})
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// Write a for loop that iterates over the Friend's purchasedarray, 
// and prints each element to the console.
// ANS:
user.friend.purchased.forEach(item => {
    console.log(item)
})
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
// ANS:
function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser();
console.log(user);
console.log("\n");

// Write a function oldAndLoud that performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed 
// in as an argument when the function is called. 
// Call your oldAndLoud function with user as the argument.
// ANS:
function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user); 
console.log(user);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// Requirements Complete! Hungry for More?
console.log("Requirements Complete! Hungry for More!");
console.log("\n");
// Cat Combinator
// 1. Mama cat
// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
// ANS:
const cat1 = {
    name: "tina",
    breed: "bengal",
    age: 3
}
console.log(cat1.age);
console.log(cat1.breed);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// 2. Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)
// ANS:
const cat2 = {
    name: "tom",
    breed: "ferrel",
    age: 4
}
console.log(cat2);
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCatsthat has two parameters mama, and papa. The function 
// will take two arguments -- each a cat object.
// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
// Example:
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }
// This is to demonstrate that functions can take objects as arguments
// You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// Make it so the combineCatsfunction will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:
// console.log(combineCats(cat1, cat2));
// Result:
// This is to demonstrate that a function can return an object

const cat3 = {
    name: "Joe", 
    age: 19, 
    breed: "Mog" 
}
const cat4 = {
    name: "Jam", 
    age: 45, 
    breed: "Siamese" 
}

function combineCats(papa, mama){
    const combinedcartsreturn = { 
        name: (`${papa.name.concat(mama.name)}`),
        age: 1,        
       // age: (`${papa.age}_${mama.age}`),
        breed: (`${papa.breed}-${mama.breed}`)
    }
    return (combinedcartsreturn);
}
console.log(combineCats(cat3, cat4));
console.log("\n");

console.log(combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" }));
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
// catCombinatorcan use itself as its own argument.
// Take a second to stew on that . . .
// What is the result of:
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// ANS:
console.log(combineCats(combineCats(cat3, cat4), combineCats(cat3, cat4)));
console.log("\n");

/////////////////////////////////////////////////////////////////////////////////

// Whoa . . .
// The above console.log is two levels deep of combineCats.
// Write a console.log that is three levels deep of combineCats. 
// combineCats should have two arguments, each which are combineCats, 
// each which have two arguments, each which are combineCats.
// Your output should look something like
// ANS:
console.log("------------------");
function combineCats2(papa, mama){
    return { 
        //name: (`${papa.name.concat(mama.name)}`),        
        name: (`${papa.name}${mama.name}`),
        //age: (`${papa.age}_${mama.age}`),
        age: 1,
        breed: (`${papa.breed}-${mama.breed}`)
    }
}
const cat5 = {
    name: "Joe", 
    age: 19, 
    breed: "Mog" 
}
const cat6 = {
    name: "Jam", 
    age: 45, 
    breed: "Siamese" 
}
const combinedcarsobj = combineCats2(
                            combineCats2(
                                         combineCats2(cat5, cat6), combineCats2(cat5, cat6)
                                        ), 
                            combineCats2(
                                         combineCats2(cat5, cat6), combineCats2(cat5, cat6)
                                        )
                            );

console.log(combinedcarsobj);
console.log("\n");