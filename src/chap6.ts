// Arrays
let stringOrArrayOfNumbers: string | number[];

// stringOrArrayOfNumbers='2';
// stringOrArrayOfNumbers=[4,4]

// const namesMaybe: (string|undefined)[] = [
//     "Aqualtune",
//     "Blenda",
//     undefined,
// ];

// Evolving Arrays
// let a= [];
// a[0]='';
// a[1]=1;
// a[2]=false;

// console.log(a);

//

// type num = number;
// let num2D:num[][]=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// function withElements(elements: string[]) {
//     console.log(elements[9001].length); // No type error
// }
// withElements(["It's", "over"]);

// const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
// // Type: number[]
// const soldierAges = [90, 19, 45];
// // Type: (string | number)[]
// let conjoined: (String | Number)[];
// conjoined = [...soldiers, ...soldierAges];

// function logWarriors(greeting: string, ...names: (string | number)[]) {
//     for (const name of names) {
//         console.log(`${greeting}, ${name}!`);
//     }
// }

// const warriors = ["Cathay Williams", "Lozen", "Nzinga"];
// logWarriors("Hello", ...warriors);
// const birthYears = [1844, 1840, 1583];
// logWarriors("Born in", ...birthYears);

// Tuples
// They are limited in quantity

// let yearAndWarrior: [number, string];
// yearAndWarrior = [530, "Tomyris"]; // Ok
// yearAndWarrior = [false, "Tomyris"];

// let [year, warrior] = Math.random() > 0.5
//     ? [340, "Archidamia"]
//     : [1828, "Rani of Jhansi"];
// console.log(year, warrior);

function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

// const pairArray = ["Amage", 1];

// logPair(...pairArray);

const pairArray: [string, number] = ["Amage", 1];

logPair(...pairArray);