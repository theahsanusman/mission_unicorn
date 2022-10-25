// Any Type & It can evolve
// let a;
// console.log(a); // It will return undefined because type is any so even before assiginging any value it's returing undefined but that's not the case with type defined variable
// a='test';
// a=4;
// a=true;

// console.log(typeof a);

// let a: string;
// console.log(a); // Error: due to asking for value of not assigned variable it's not like above with anby type
// a = 'test';
// console.log(a);

// let guests = ['Jade','John'];
// let guests = ['Jade','John',3];
// guests.push(3);

// type KillBill = (name: string) => string;
// let killBill: (name: string) => string;

// killBill = function (name) {
//     return name.toUpperCase();
// }

// let killBill2:KillBill = function (name) {
//     return name.toUpperCase();
// }

// console.log(killBill2('bila'))

// Evolving types (dangerous)
// let year;
// year = 2002;
// console.log(typeof year); // Number
// year=`don't know lol`;
// console.log(typeof year); // String

// function calcTotalPrice(price:any) {
//     return price + (price * 0.18);
// }

// const priceOfToy = calcTotalPrice(100);
// const discountedToyPrice = priceOfToy / 2;

// console.log(priceOfToy);
// console.log(discountedToyPrice);

// function calcTotalPrice(price:number):number {
//     return Number((price + (price * 0.18)).toFixed());
// }

// const priceOfToy = calcTotalPrice(100);
// const discountedToyPrice = priceOfToy / 2;

// console.log(priceOfToy);
// console.log(discountedToyPrice);

// Type Number
// let year: number;
// year = 2022;
// year='4';

// let myBits = 0b100; // Binary numbers falls into number type
// console.log(myBits);

// let myOctals = 0o100; // Binary numbers falls into number type
// console.log(myOctals);

// let myHexaDecimals = 0X100; // Binary numbers falls into number type
// console.log(myHexaDecimals);

// let bigInt:bigint = 9007199254740991n;
// console.log(bigInt);

// Number vs number

// let value = 1000; // primite number
// let otherVal = new Number(1000); // object number

// console.log(value, otherVal); 

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// Null vs Undefined
// let price:number=10;
// // price = 10;
// console.log(typeof price);
// price = undefined;
// console.log(typeof price);

// let price;
// price = null;
// console.log(typeof price, price); // null is an object type but value of price will be null

// let price:undefined;
// console.log(typeof price, price);

// let price2:null;
// console.log(typeof price2, price2);

// let price3:number;
// console.log(typeof price3, price3); // haha undefined in value and undefined in type too lol

// let price: null | undefined | null;
// console.log(price == null); // true It's relating undefined value of price to null that's why giving true
// console.log(price === null); // false Here It's matching type too which is undefined not null that's the reason of false

// Never vs Void
// when not returning anything use void
// function sum(a: number, b: number): void {
//     console.log(a + b);
// }

// // when functions wont even have chance to go next line then never will be used to tell it can't even return anything & it won't
// function raiseError(message: string): never {
//     throw new Error(message);
//     console.log('32');
// }
// raiseError('testing')

// function forever():never{
//     while(true){
//         console.log('typescript')
//     }
// }

// Enum Type - Javascript doesn't support it

// enum weekdays {
//     Monday = 1,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

// enum weekdays2 {
//     Mon = 'Monday',
//     Tue = 'Tuesday',
//     Wed = 'Wednesday',
//     Thu = 'Thursday',
//     Fri = 'Friday',
//     Sat = 'Saturday',
//     Sun = 'Sunday'
// }

// console.log(weekdays2['Sat']);
// console.log(weekdays2.Sat);

// Calculated Enums
// enum weekdays {
//     Monday = 1,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday = weekdays.Monday - 1
// }
// console.log(weekdays);

// Object Type

// let fruits; // type any
// fruits={ // literal type added now cant add new properties 
//     name: 'mango'
// };
// fruits.price = 100; // error
// // console.log(typeof fruits);
// console.log(fruits);

// to add property
// let fruits: {
//     name: string,
//     price: number,
//     color?:string
// };

// fruits = {
//     name: 'mango',
//     price: 100
// };
// fruits.color = 'yellow';
// // console.log(typeof fruits);
// console.log(fruits);
// console.log(typeof fruits.color);

// Arrays vs Tuples

// let fruits;
// fruits = ['mango','banana'];
// fruits = 4;
// fruits='prank of evolving variables'

// let fruits:string[];
// fruits = ['mango','banana'];
// fruits.push('grapes')
// console.log(fruits.length);
// let colors:number[] = [0,1];
// colors = [...colors, 2];
// console.log(colors);

// Tuples are fixed arrays
// let colors: [number,number,number] = [0,1,3];
// console.log(colors[2]);

// Union Types

// function printId(id:string|number):string|number{
//     if (typeof id==='string'){
//         return id.toUpperCase();
//     }
//     else {
//         return Number(id.toFixed());
//     }
// }

// console.log(printId('test'))
// console.log(printId(61.42))

// Type Alias and Interface

// type CarBase = {
//     model: string,
//     year: number,
//     color: string,
//     additionalDetails?: CarDetails
// }

// type CarDetails = {
//     topSpeed: number,
//     fuelTankSize: number,
//     transmission: string
// }

// let cars: CarBase[] = [];

// cars.push({
//     model: 'Toyota Revo',
//     year: 2023,
//     color: 'black'
// });

// cars.push({
//     model: 'La ferrari',
//     year: 20243,
//     color: 'red',
//     additionalDetails: {
//         topSpeed: 304,
//         fuelTankSize: 29,
//         transmission: 'auto'
//     }
// });

// console.log(cars);


// interface CarBase {
//     model: string,
//     year: number,
//     color: string,
// }

// interface CarDetails extends CarBase {
//     topSpeed: number,
//     fuelTankSize: number,
//     transmission: string
// }

// let cars: CarDetails[] = [];

// cars.push({
//     model: 'La ferrari',
//     year: 20243,
//     color: 'red',
//     topSpeed: 304,
//     fuelTankSize: 29,
//     transmission: 'auto'
// });

// console.log(cars);

// type CarBase = {
//     model: string,
//     year: number,
//     color: string,
// }

// type CarDetails = CarBase & {
//     topSpeed: number,
//     fuelTankSize: number,
//     transmission: string,
//     convertible?: boolean
// } 

// let cars: CarDetails[] = [];

// cars.push({
//     model: 'La ferrari',
//     year: 20243,
//     color: 'red',
//     topSpeed: 304,
//     fuelTankSize: 29,
//     transmission: 'auto',
// });

// console.log(cars[0].convertible); // Optional Properties are undefined on auto

// optional Parameters

// function getPrice(price: number) {
//     return price + 10;
// }

// console.log(getPrice(10))
// console.log(getPrice(undefined!)) // Non null assertion

// function getPrice(price: number,discount?: number) {
//     return price + discount!;
// }
// console.log(getPrice(10));

// Class with Types

// class Coordinate {
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     x: number;
//     y: number;
// }

// const point = new Coordinate(44, 77);
// // point.x = 42;
// console.log(point);

// Access Modofiers

// class Coordinate {
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     private x: number;
//     private y: number;
//     // public getX(){
//     //     return this.x;
//     // }
// }

// class MyCoordinate extends Coordinate{
//     public getX(): number {
//         return this.x;
//     }
// }

// const point = new MyCoordinate(44, 77);
// // point.x = 42;
// // console.log(point.x); Error: can't access protected property
// console.log(point.getX());

// Readonly vs Static

// class Fruit {
//     readonly price: number;
//     readonly season: string = 'summer';
//     protected static count = 0;
//     constructor(price:number){
//         this.price=price;
//         Fruit.count++;
//     }
//     getCount(){
//         return Fruit.count;
//     }
// }

// const mango = new Fruit(20);
// const apple = new Fruit(20);
// // mango.price = 1;
// // console.log(Fruit.count);
// console.log(apple.getCount());

// Interface

// interface CarBase {
//     readonly model: string,
//     readonly year: number,
//     readonly color: string,
// }

// interface CarDetails extends CarBase {
//     readonly topSpeed: number,
//     readonly fuelTankSize: number,
//     readonly transmission?: string
// }

// let cars: CarDetails[] = [];

// cars.push({
//     model: 'La ferrari',
//     year: 20243,
//     color: 'red',
//     topSpeed: 304,
//     fuelTankSize: 29,
//     transmission: 'auto',
// });

// console.log(cars);

// interface Fruit {
//     name: string,
//     readonly price: number,
//     color?: string
// }

// class MyFruit implements Fruit {

//     name: string;
//     price: number;

//     constructor(name: string, price: number) {
//         this.name = name;
//         this.price = price;
//     }
// }

// Generics
// let arrNum = [1, 2, 3, 4, 5, 6];
// let arrStr = ['a', 'b', 'c', 'd', 'e', 'f'];

// function getRandomElement<T>(arr: T[]): T {
//     const index = Math.floor(Math.random() * arr.length);
//     return arr[index];
// }

// let result: string;
// result = getRandomElement(arrStr);
// result = getRandomElement(arrNum); Genrics solves this problem of function modifying the type of variable if function is having any return type & any parameters type

// console.log(result, typeof result);

// Generics Constaint

// type Person  = {
//     firstName: string
// }

// function getData<T extends Person>(data:T) {
//     return data;
// }

// const details = {lastName:'doe',firstName:'John'}

// console.log(getData(details))

const details = { lastName: 'doe', firstName: 'John' }

function getElement<O extends object, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

console.log(getElement(details, 'firstName'));
