// let thinker: string|null;
// console.log(thinker); // Error in Strict mode and undefined in strict mode off
// let admiral:string|number;
// admiral=Math.random()>.5?'Test':5.99;
// // Narowing
// if(typeof admiral==='string') admiral=admiral.toUpperCase();
// if(typeof admiral==='number') admiral=admiral.toFixed();
// console.log(admiral);
// Literals
// const a = 'a';
// // Var & let assigns the primtive types
// let b = 'b'; // type string
// let admin: 'Jan' | 'John' | 'James';
// admin='Jan';
// let admin:'James';
// admin='James';
// let admin2 = 'James';
// admin2='Jan';
// let nameMaybe = Math.random()>.5?'test':undefined;
// console.log(nameMaybe?.toUpperCase())
// let employee: { pro1: string, pro2: number };
// let var1 = employee = {
//     pro1: 'fa',
//     pro2: 32
// }
// let var2 = employee = {
//     pro1: 'fa',
//     pro2: 32
// }
// type LowRain = {
//     flood: boolean,
//     location: string
// }
// type HighRain = {
//     flood: boolean,
//     mm: number
// }
// type Rain = LowRain | HighRain;
// let rainStatus: Rain = {
//     flood: true,
//     // location: 'sindh',
//     mm: 100
// }
// // console.log(rainStatus.location);
// console.log(rainStatus.mm);
// const summerFruits1 = ['mango', 'strawberry'];
// summerFruits1.push('melon');
// let summerFruits2 = ['mango', 'strawberry'] as const;
// let summerFruits3: readonly ['mango', 'strawberry'] = ['mango', 'strawberry'];
// console.log(summerFruits3);
// function log(name: string, value: number):void {
//     console.log(`${name} ${value}`);
// }
// let tuple1:[string,number] = ['john',1];
// let arr1 = ['john',2];
// log(...tuple1);
// // log(...arr1); // error: can't pass arr as spread argument if function is not accepting spread operater
// function log2(...data:(string|number)[]):void {
//     console.log(`${data[0]} ${data[1]}`);
// }
// log2(...arr1);
// log2(...tuple1);
// let a = [false, 1];
// // let b:[boolean,number]=a; // error can't assign array to tuple
// let b: (boolean | number)[] = a;
// a.push(2)
// console.log(b);
// let c: (boolean | number)[] = [...a];
// a.push(3);
// console.log(c);
// type MSG = (msg: string) => string;
// let var1: MSG;
// let arrOfFunctions1: ((msg: string) => string)[] = [];
// let arrOfFunctions2: MSG[] = [];
// arrOfFunctions1[0] = (msg: string) => msg;
// arrOfFunctions1[1] = (msg: string) => msg + '111111';
// arrOfFunctions2[0] = (msg: string) => msg;
// arrOfFunctions2[1] = (msg: string) => msg + '111111';
// function add(a:string,b:string): string;
// function add(a:number,b:number): number;
// // function add(a:boolean): number; // All the overload function should have same parameters required
// function add(a:any,b:any): any {
//     return a+b;
// }
// console.log(add('hello','world'));
// console.log(add(1,1));
// let returnsNothing = (): void => { };
// // console.log(returnsNothing()); // undefined
// let haha: undefined | string;
// haha = returnsNothing();
// console.log(haha);
// function listSongs(...songs: string[]): void {
//     songs.forEach((song, i) => {
//         console.log(`Song no. ${i + 1}: ${capitialize(song)}`);
//     });
// }
// function capitialize(str: string): string {
//     return (str.split(' ').map((word, i) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())).join(' ');
// }
// const songs = ['dhoom Machale', "imaginery Gal", "brown kudi"];
// listSongs(...songs)
// function a(d='4'){
// console.log(d*4);
// }
// let saveSomethingIfYouCan:number & string;
// saveSomethingIfYouCan=4; // haha
// let a:string;
// console.log(a);
var a;
