// arr =[1,2,2];
// const setA = new Set([2,"3"])
// console.log(arr);
// console.log(setA);
// setA.delete("3",2)
// console.log(setA);



// const letters = new Set(["a","b","c"]);

// // Get all Values
// // const values = letters.values();
// // const keys = letters.keys();
// const entries = letters.entries();
// // console.log(values);
// // console.log(keys);
// console.log(entries);
// // console.log(letters);
// out=""
// for(x of entries){
//     out+=x;
// }
// console.log(out);

// const letters = new Set(["a","b","c"]);

// // List all Entries
// let text = "";
// for (const entry of letters.entries()) {
//   text += entry;
// }
// console.log(text);

// const letters = new Set(["a","c","c"]);
// console.log([...letters].map);

// remove duplicats with the help of set
// a=[1,2,33,33]
// set= new Set(a)
// b=[...set]

// console.log(Array.isArray(b));
const letters = new Set(["a","b","c"]);

console.log(letters.size);