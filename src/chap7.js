// Interfaces
// Differences b/w Type Aliases & Interfaces
var calcSource;
function calc(num1, num2) {
    return calc.working ? num1 + num2 : 'Working is false';
}
calc.working = !false;
calcSource = calc;
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
