// Interfaces
// Differences b/w Type Aliases & Interfaces

// 1. With type aliases we can set union but with interface we can't
// 2. Type alias copy and pasted on every instance where it's used but interface not because it's works on naming approach that's it's fast and recommeded to use until & unless we have to achieve the union
// type CarBase = {
//     name: string;
//     model: number;
// } | string;

// interface CarBase {
//     name: string;
//     model: number;
// }

// let bmwM5: CarBase= {
//     name: "Bmw M5",
//     model: 2023
// }

// console.log(bmwM5);

// Optional Properties 
// interface Point {
//     x: number;
//     y: number;
//     z?:number;
//     toString?:()=>string;
// }

// const point = {
//     x: 33.3,
//     y:66.9
// }

// Readonly
// interface CarBase {
//     name: string;
//     model: number;
//     readonly type?: string|boolean;
// }

// let bmwM5:CarBase = {
//     name:"BMW M5",
//     model: 2023,
//     type: 'Seedan'
// }

// Functions
// interface HasBothFunctionTypes {
//     purpose: string;
//     property: () => string;
//     method(): string;
// }
// Property one is good to use when don't need actual owner object propterties values (this) otherwise use method functions
// const hasBoth: HasBothFunctionTypes = {
//     purpose: 'testing',
//     property: () => '',
//     method() {
//         return this.purpose;
//     }
// }

// console.log(hasBoth.method());
// console.log(hasBoth.property());


// Call Signatures
// type Calc = (num1:number,num2:number)=>number;
interface Calc {
    working: boolean;
    (num1: number, num2: number): number|string;
}

let calcSource: Calc;
function calc(num1,num2){
    return calc.working? num1+num2:'Working is false';
}
calc.working=!false;
calcSource=calc;

console.log(calc(1, 1));


// Index Signature
// Helps to defined the property possible value type(s)

// interface StringMap {
//     [key: string]:string
// }

// const map:StringMap ={
//     key1: 'val1',
//     key2: 'val2'
// }