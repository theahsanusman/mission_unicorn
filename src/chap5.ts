// Functions

// Unlike JS that don't checks numbers of parameters
// But TS does check it & in the case of lesser or greater that required parameter it protests in the form of type error
/*
function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
} 

announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok
*/

// type a = string;
// let b: a;
// console.log(b);

// function rateSong(song: string, rating = 0) {
//     console.log(`${song} gets ${rating}/5 stars!`);
// }

// rateSong("Photograph"); // Ok
// rateSong("Set Fire to the Rain", 5); // Ok
// rateSong("Set Fire to the Rain", undefined); // Ok
// rateSong("At Last!", "100");

// function buyAllTheCars(name: string, ...cars: String[]){
//     for (const car of cars) {
//         console.log(`${name} bought ${car}`)
//     }
// }

// buyAllTheCars('Ahsan', 'BMW m5','La Ferrari', 'RollsRoyce Dawn');

// function singSongs(songs: string[]):number|undefined {
//     for (const song of songs) {
//         console.log(`${song}`);
//     }
//     return;
// }

// Function Types
// let maybeReturnsString: (() => string);
// Can't use it before assiging error below
// console.log(maybeReturnsString);

// type StringToNumber = (input: string) => number;
// let stringToNumber: StringToNumber;
// stringToNumber = (input) => input.length; // Ok
// stringToNumber = (input) => input.toUpperCase();

// function logSong(song: string | undefined): void {
//     if (!song) {
//         return; // Ok
//     }
//     console.log(`${song}`); return true;
//     // Error: Type 'boolean' is not assignable to type 'void'.
// }

// function a():void{
// }
// console.log(a());
// function fail(msg: string): never {
//     throw new Error(`Invariant failure: ${msg}`);
// }

// function workWithUnsafeParam(param: unknown): string {
//     if (typeof param !== "string") {
//         fail(`param should be a string, not ${typeof param}`)
//     }
//     return param.toUpperCase();
// }

// console.log(workWithUnsafeParam(4))

// Function Overloading
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp)
        : new Date(year, monthOrTimestamp, day);
}
createDate(554356800); // Ok
createDate(7, 27, 1987); // Ok
// createDate(4, 1);