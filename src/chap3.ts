// Unions & Literal

// let mathematician = Math.random() > 0.5
//     ? undefined
//     : "Mark Goldberg";

// let thinker: string | null = null;

// if (Math.random()>0.5){
//     thinker = "Steve";
// }

// console.log(thinker);

// let admiral: string | number;
// admiral="Grace";
// admiral=7;
// console.log(admiral);

// For Known values
// let scientist = Math.random()>0.5?'Nicola Tesla':51;
// if(scientist==='Nicola Tesla')console.log(scientist.toUpperCase());

// let scientist = Math.random() > 0.5 ? 'Nicola Tesla' : 51.9;
// if (typeof scientist === 'string') console.log(scientist.toUpperCase());

// let scientist = Math.random() > 0.5 ? 'Nicola Tesla' : 51.9;
// console.log(typeof scientist === 'string' ? scientist.toUpperCase() : scientist.toFixed());

// Literals
// They can be as much as we like unlike primitve types
// const mathematician: "Mark" = 'Mark';

// let lifeSpan: number | 'ongoing' | 'dead';

// lifeSpan = 99;
// lifeSpan = 'ongoing';
// lifeSpan = 'dead';

// console.log(lifeSpan);

// let geneticist = Math.random() > 0.5
//     ? "Barbara McClintock"
//     : undefined;

// console.log(geneticist && geneticist.toUpperCase());

// let biologist = Math.random() > 0.5 && "Rachel Carson";
// if (biologist) {
//     biologist; // Type: string
// } else {
//     biologist; // Type: false | string
// }

// console.log(biologist, typeof biologist);

// let mathematician: string | undefined;
// console.log(mathematician?.length) // Ok
// mathematician = "Mark Goldberg";
// mathematician.length; // Ok

// Type Aliases
// type RawData = boolean | number | string | 'custom' | null | undefined;

// let rawDataFirst: RawData;
// let rawDataSecond: RawData;
// let rawDataThird: RawData;

// Type Aliases Reference
// type IdMaybe = Id | undefined | null;
// type Id = number | string;