let num = 6;
//(?) Write a conditional --> +  -
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num === 0) {
  console.log(`${num} is zero. neutral`);
} else {
  console.log(`${num} is negative`);
}
// --If Else

//(?) Nested If Else
if (num % 2 === 0) {
  console.log(`${num} is even.`);
  if (num === 6) {
    console.log("its 6! pick up sticks!");
  } else {
    console.log("and its def not 6");
  }
} else {
  console.log(`${num} is odd.`);
}

// Switch Statements
let age = "20";

switch (age) {
  case 10:
    console.log("I Love Spiderman");
    break;
  case 15:
    console.log("I Love Fortnite");
    break;
  case 18:
    console.log("I have my license");
    break;
  default:
    console.log("Hmmm, i dont have any instructions for your age");
    break;
}

// demoFunc w prpmopt
const doTheThing = () => {
  let input = prompt("Enter Your Age");
  switch (input) {
    case "16":
      console.log("I Love Spiderman");
      break;
    case "15":
      console.log("I Love Fortnite");
      break;
    case "18":
      console.log("I have my license");
      break;
    default:
      console.log("Hmmm, i dont have any instructions for your age");
      break;
  }
};

const annesExample = (someNumber) => {
  switch (someNumber) {
    case "16":
      console.log("I Love Spiderman");
      break;
    case "15":
      console.log("I Love Fortnite");
      break;
    case "18":
      console.log("I have my license");
      break;
    default:
      console.log("Hmmm, i dont have any instructions for your age");
      break;
  }
};
annesExample("12");

// Ternary Operators
// Syntax:  condtion ? trueStatement  : falseStatement
num === 2 ? console.log("Num is 2") : console.log("Num is not 2");
//------------------------- Ex2:
num === 3 ? console.log("TreBall!") : console.log("You Missed");

// num > 1 ?  num + 15 : num - 10       [calculated ternary]

try {
  let jordan;
  let chopped = jordan.split("");
  console.log(chopped);
} catch (error) {
  // console.log(error)
  console.error(error);
  //   throw "Our Own Error Can Be Declared Here.";
}
// -------TryCatch

// Loops
// "?" allow us to iterate through a group of data/ terms

// ForLoops w String 
let slogan = "ThisIsHowWeDoIt";

for (let i = 0; i < slogan.length; i++) {
  console.log(slogan[i], "currentLetter");
}

// -------for
for (let i = 0; i < 10; i += 3) {
  console.log(`The value of i is now: ${i}`);
}
// 1. Count down from 10 to 1.
// for (let i = 10; i >= 1; i--) {
//     console.log(`The value of i is now: ${i}`);
//   }

//2.  Output odd numbers from 1 to 10.
for(i=1;i<=10;i+=2){
console.log(i,"is odd" )
}

//3. Output even number from 1 to 10.
for(let i = 2 ; i <= 10; i+=2){
    console.log(i)
}

// Output multiples of 3, starting at 6 and ending at 60.
for(let i = 6 ; i<=60; i+=3 ){
console.log(i, "*")
}

// *BOnus*
// Output an increasing number of # symbols, from 1 to 7, as shown below.
// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.
// ------------------------------------------------------------------------------------------------------

// for of
    // -->each instance of 
const str = "Hello World";
for (const c of str) {
	console.log(c);
}


let ninjaTutrles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"]

for(turtle of ninjaTutrles){
  console.log(turtle)
}

// ----- while
let x = 0
while (x <= 10) {
  console.log(`${x}, X`)
  x++
}







//  / -----  do while ----
Collapse

// // let num = 6;
// // //(?) Write a conditional --> +  -
// // if (num > 0) {
// //   console.log(`${num} is positive`);
// // } else if (num === 0) {
// //   console.log(`${num} is zero. neutral`);
// // } else {
// //   console.log(`${num} is negative`);
// // }
// // // --If Else

// // //(?) Nested If Else
// // if (num % 2 === 0) {
// //   console.log(`${num} is even.`);
// //   if (num === 6) {
// //     console.log("its 6! pick up sticks!");
// //   } else {
// //     console.log("and its def not 6");
// //   }
// // } else {
// //   console.log(`${num} is odd.`);
// // }

// // // Switch Statements
// // let age = "20";

// // switch (age) {
// //   case 10:
// //     console.log("I Love Spiderman");
// //     break;
// //   case 15:
// //     console.log("I Love Fortnite");
// //     break;
// //   case 18:
// //     console.log("I have my license");
// //     break;
// //   default:
// //     console.log("Hmmm, i dont have any instructions for your age");
// //     break;
// // }

// // // demoFunc w prpmopt
// // const doTheThing = () => {
// //   let input = prompt("Enter Your Age");
// //   switch (input) {
// //     case "16":
// //       console.log("I Love Spiderman");
// //       break;
// //     case "15":
// //       console.log("I Love Fortnite");
// //       break;
// //     case "18":
// //       console.log("I have my license");
// //       break;
// //     default:
// //       console.log("Hmmm, i dont have any instructions for your age");
// //       break;
// //   }
// // };

// // const annesExample = (someNumber) => {
// //   switch (someNumber) {
// //     case "16":
// //       console.log("I Love Spiderman");
// //       break;
// //     case "15":
// //       console.log("I Love Fortnite");
// //       break;
// //     case "18":
// //       console.log("I have my license");
// //       break;
// //     default:
// //       console.log("Hmmm, i dont have any instructions for your age");
// //       break;
// //   }
// // };
// // annesExample("12");

// // // Ternary Operators
// // // Syntax:  condtion ? trueStatement  : falseStatement
// // num === 2 ? console.log("Num is 2") : console.log("Num is not 2");
// // //------------------------- Ex2:
// // num === 3 ? console.log("TreBall!") : console.log("You Missed");

// // // num > 1 ?  num + 15 : num - 10       [calculated ternary]

// // try {
// //   let jordan;
// //   let chopped = jordan.split("");
// //   console.log(chopped);
// // } catch (error) {
// //   // console.log(error)
// //   console.error(error);
// //   //   throw "Our Own Error Can Be Declared Here.";
// // }
// // // -------TryCatch

// // // Loops
// // // "?" allow us to iterate through a group of data/ terms

// // // ForLoops w String
// // let slogan = "ThisIsHowWeDoIt";

// // for (let i = 0; i < slogan.length; i++) {
// //   console.log(slogan[i], "currentLetter");
// // }

// // // -------for
// // for (let i = 0; i < 10; i += 3) {
// //   console.log(`The value of i is now: ${i}`);
// // }
// // // 1. Count down from 10 to 1.
// // // for (let i = 10; i >= 1; i--) {
// // //     console.log(`The value of i is now: ${i}`);
// // //   }

// // //2.  Output odd numbers from 1 to 10.
// // for(i=1;i<=10;i+=2){
// // console.log(i,"is odd" )
// // }

// // //3. Output even number from 1 to 10.
// // for(let i = 2 ; i <= 10; i+=2){
// //     console.log(i)
// // }

// // // Output multiples of 3, starting at 6 and ending at 60.
// // for(let i = 6 ; i<=60; i+=3 ){
// // console.log(i, "*")
// // }

// // // *BOnus*
// // // Output an increasing number of # symbols, from 1 to 7, as shown below.
// // // Print “prime” for all prime numbers.
// // // Print “even” for all even numbers.
// // // Print “odd” for all odd numbers.
// // // Treat 2 as an even number and 1 & 3 as odd, rather than prime.
// // // ------------------------------------------------------------------------------------------------------

// // // for of
// //     // -->each instance of
// // const str = "Hello World";
// // for (const c of str) {
// // 	console.log(c);
// // }

// let ninjaTutrles = ["Raphael", "Donatello", "Michaelangelo", "Leonardo"];

// // for(turtle of ninjaTutrles){
// //   console.log(turtle)
// // }

// // ----- while
// // let x = 0
// // while (x <= 10) {
// //   console.log(`${x}, X`)
// //   x++
// // }
// // -----------------------------[Problems:]

// // Count down to 0 from a given number.
// // console.log(`Counts Down From 10`)

// // let count = 10;
// // while( count >= 0 ){
// //   console.log(count)
// //   count--
// //   // allows the process to ITERATE
// // }
// // ----------------------------------------

// // Log integers in multiples of 3 as long as they are less than 35.

// // let new_x = 3 ;
// // while (new_x < 35) {
// //   console.log(`${new_x}`)
// //   new_x += 3
// // }

// // Print integers in multiples of 5 as long as they are less than 100.
// // let x = 0;
// // while (x < 100 ) {
// //   if( x % 5 === 0){
// //     console.log(`${x} is mulitple of 5`)
// //   }
// //   x++
// // }

// // Print integers between 0 and 20 with the following conditions:
// let x = 0;
// let answer = 0;

// while (x < 20) {
//   if (x % 2 === 0) {
//     // All numbers divisible by 2 should be multiplied by 3 before they are output.
//     // answer = x * 3
//     console.log(`Output before Calc: ${x}`);
//     console.log(x * 3);
//   }
//   x++;
// }
// // All other integers should not be output.
// // Print all prime numbers between 0 and 20.
// //  / -----  do while ----

// // --------------------[Collection]

// // Arrays && OBJs

// let students = [
//   "Charles",
//   // -------[0]
//   "Sevinch",
//   // -------[1]
//   "Karthika",
//   // -------[2]
//   "Joy",
//   // -------[3]
//   "Hemba",
// ];
// // ---Arrays     ------  indexes

// console.log(students[2]);
// let greetings = [];
// for (let i = 0; i < students.length; i++) {
//   greetings[i] = "Hello, " + students[i] + "!";
//   console.log(greetings[i]);
// }

// for (let name of students) {
//   console.log("Hello, " + name + "!");
// }

// // ARRAYS: GROUPS BASED ON INDEX POSITION
// let thisArr = [12, "String", true, true];
// console.log(thisArr);

// let jordansClasses = ["rtt01", "rtt08", ["privateClassOne", "privateClassTwo"]];

// // OBJECT: GROUPS BASED ON <KEY,VALUE> PAIRS
// let jordansCourses = {
//   // key:     value:""
//   course1: ["rtt01", "rtt01", "rtt01"],
//   course2: [],
//   pdCourses: "",
//   number: "String",
// };

// let michael = [
//   "IceCream",
//   {
//     favShows: ["Friends", "LivingSingle", "Seinfield"],
//   },
//   "Items Here",
//   44,
// ];
// console.log(michael[1].favShows[2]);
// console.log("Total Items:", michael.length);
// console.log("NumOfFaveShows: ", michael[1].favShows.length);

// let cashMoneyRecords = [
//   "Lil Wayne",
//   // -----------[0]
//   "Tyga",
//   // -----------[1]
//   "Nicki",
//   // --------------[2]
//   "Drake",
//   "Mac Maine",
// ];
// console.log(cashMoneyRecords.length);

// let ourRecordLabel = {
//   artists: [
//     {
//       name: "lilwayne",
//       salary: 999999,
//       currentHitSongs: "lollipop",
//     },
//   ],
//   phoneNumber: "",
//   headquarters: ""
// };

let laurasShop = ["apples", "oranges", "papayas"];
// -----Fruits

let laurasShoppe = {
  foods: ["apples", "oranges", "papayas"],
  drinks: ["milk", "appleJuice", "tequila"],
};

// console.log(laurasShoppe.foods[1]);

//-------------- Array Methods

console.log(`${laurasShoppe.foods} are in the cart`);

let ourFood = laurasShoppe.foods;

ourFood.push("Kiwi");
// ------.push() method
console.log("Now look: ", ourFood);
// ------.pop() method
ourFood.pop();
console.log("Lookie Here:", ourFood);

// ....unshift()
console.log(ourFood.shift());
console.log(ourFood);

// ----map  --forEach -- filter

laurasShop.map((student) => {
  let number = 22
  // calculate on data
  laurasShoppe.foods[0] = "Pistachios"
  console.log(laurasShoppe.foods," Store in France")
  // reassign data 

  console.log(student + number )
});