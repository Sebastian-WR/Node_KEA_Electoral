// We aim to use functional approaches when looping
// like map, filter, reduce, find etc.



// det er smartere med disse end tradinonelt for loop
// loop through this array using map print out each element
// tre måder at gøre det på 
const failures = ["misclick", "falling", "tiktok", "Christopher"];
const failuresCopy = failures.map(failure => {
    console.log(failure)
});

const failuresCopy5 = failures.find((failure) => failure === 'tiktok');
console.log();
console.log(failuresCopy5);
const failuresCopy6 = failures.filter((failure) => failure === 'tiktok').shift();
console.log(failuresCopy6);
const failuresCopy2 = failures.map((failure, index) => {
    // console.log(failure, index)
    return {failure};
});

const failuresCopy3 = failures.map((failure, index) => console.log(failure, index));

console.log();
console.log(failuresCopy2); // løses ved at smide return failure ind i callback functionen men uden som origninalt er bedre tror jeg

const failuresCopy4 = failures.map((failure) => failure);
console.log(failuresCopy4);
/* 
for (let index = 0; index < array.length; index++) {
    // ... some code ...
}
 do {
    // ... some code ...
 } while (condition);

 while (condition) {
    // ... some code ...
 }
 array.forEach(element => {
    // ... some code ...
 }); */
// Create a new server from scratch.. this will be a pure Data API 
// so I will call i 2._Data_API