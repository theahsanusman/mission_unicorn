// OBJECTS

// let poetLater: {
//     born:number;
//     name:string
// }

// poetLater = {
//     name: 'Mary',
//     born: 1935
// }

// poetLater='Mary';

// console.log(poetLater);

// type User = {
//     id: number;
//     email?: string;
//     phone?: number;
//     name:string;
// }

// const users: User[] = [];

// users.push({
//     id: 1,
//     phone:423232323,
//     name:'John'
// });

// console.log(users);

// type TimeRange = {
//     start: Date;
// }

// const hasStartString: TimeRange = {
//     start: new Date('1879-02-13')
// }
// console.log(hasStartString);

// type Author = {
//     firstName: string;
//     lastName: string;
// };

// type Poem = {
//     author: Author;
//     name: string;
// };

// const poem: Poem = {
//     author:{
//         firstName:'A',
//         lastName: 'B'
//     },
//     name: 'Abc'
// }

// let typeChr: { author?: string, age: number } = {
//     age: 4
// }
// console.log(typeChr.author);

// Example below giving undefined too because types are not explicted defined but interms of defined it's not the case see next example
// const poem = Math.random() > 0.5
// ? { name: "The Double Image", pages: 7 }
// : { name: "Her Kind", rhymes: true };

// console.table(poem)
// console.log(poem.pages, poem.rhymes);

// type PoemWithPages = {
//     name: string;
//     pages: number;
// };

// type PoemWithRhymes = {
//     name: string;
//     rhymes: boolean;
// };

// type Poem = PoemWithPages | PoemWithRhymes;

// const poem: Poem = Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7 }
//     : { name: "Her Kind", rhymes: true };

// console.table(poem)
// console.log(poem.pages, poem.rhymes); Not the right way to accesss
// Gives error bcz if something property is not avialble how it'd access it's value yess that's what if tries to do
// if (poem.pages) {}

// Narrowing
// console.log(
//     "pages" in poem ? poem.pages : poem.rhymes
// );

// Discriminated Unions
// type PoemWithPages = {
//     name: string;
//     pages: number;
//     type: 'pages';
// };
// type PoemWithRhymes = {
//     name: string;
//     rhymes: boolean;
//     type: 'rhymes';
// };
// type Poem = PoemWithPages | PoemWithRhymes;
// const poem: Poem = Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7, type: "pages" }
//     : { name: "Her Kind", rhymes: true, type: "rhymes" };
// if (poem.type === "pages") {
//     console.log(`It's got pages: ${poem.pages}`); // Ok
// } else {
//     console.log(`It rhymes: ${poem.rhymes}`);
// }
// poem.type; // Type: 'pages' | 'rhymes'
// poem.pages;

// Intersection
// type Artwork = {
//     genre: string;
//     name: string;
// };

// type Writing = {
//     pages: number;
//     name: string;
// };

// type WrittenArt = Artwork & Writing;

// const wa: WrittenArt = {
//     name: 'fwf',
//     pages: 5,
//     genre: 'fwfew'
// }

// type ShortPoem = { author: string } & (
//     | { kigo: string; type: "haiku"; }
//     | { meter: number; type: "villanelle"; }
// );

// const morningGlory: ShortPoem = {
//     author: "Fukuda Chiyo-ni",
//     kigo: "Morning Glory",
//     type: "haiku",
// };

// const oneArt: ShortPoem = {
//     author: "Elizabeth Bishop",
//     // meter: 4,
//     type: "villanelle",
// };

// Becareful while using intersections because of long assignability errors
// type ShortPoemBase = { author: string };
// type Haiku = ShortPoemBase & { kigo: string; type: "haiku" };
// type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };
// type ShortPoem = Haiku | Villanelle;

// const oneArt: ShortPoem = {
//     author: "Elizabeth Bishop",
//     type: "villanelle",
// }

// haha never types see below
// type NotPossible = number & string;

// let num: NotPossible = 5;
// let str: NotPossible = 'fwa';