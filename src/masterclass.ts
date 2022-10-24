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

