// If the person guess that painter is function & painting is string but still if data type will be chagned later on then it'll likely to crash
// function paintPainting(painter, painting) {
//     return painter
//         .prepare()
//         .paint(painting, painter.ownMaterials)
//         .finish();
// }

// In order to cop with that issue ppl use JSDoc to make code more understandable
// E.g
/**
* Performs a painter painting a particular painting.
*
* @param {Painting} painter
* @param {string} painting
* @returns {boolean} Whether the painter painted the painting.
*/
// function paintPainting(painter, painting) { /* ... */ }

// Even with JSDoc if the type changed later on then the dev have to update the JSDoc manually it's fine for small codebase but when building complex & big projects with hundreds or even thousads of files then it becomes a big challenege
// That's where typescript comes in



// const msg: string = 'Hello World!';
// const len: number = msg.length;
// console.log(len)

// function sayMyName(firstName: string, lastName:string) {
//     console.log(`You acting kind of shady, ain't callin' me ${firstName} ${lastName}`);
// }

// function sayMyName(fullName: string) {
//     console.log(`You acting kind of shady, ain't callin' me ${fullName}`);
// }

// sayMyName('Ahsan Usman');
// sayMyName('Ahsan','Usman');

// function test(a:string):number{
//     return a;
// }
// console.log(test('2'))

// Code below will give error on compile time in TS to correct it but javascript just crashes the code on the render time
// console.blub('Testing')
