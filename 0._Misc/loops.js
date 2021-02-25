// We aim to use functional approaches when looping
// like map, filter, reduce, find etc.

const failures = ["misclick", "falling", "tiktok", "Christopher"];

// det er smartere med disse end tradinonelt for loop
// loop through this array using map print out each element
// tre måder at gøre det på 
const failuresCopy = failures.map(failure => {
    console.log(failure)
});

const failuresCopy2 = failures.map((failure, index) => {
    // console.log(failure, index)
    return {failure};
});

const failuresCopy3 = failures.map((failure, index) => console.log(failure, index));

console.log();
console.log(failuresCopy2); // løses ved at smide return failure ind i callback functionen men uden som origninalt er bedre tror jeg

const failuresCopy4 = failures.map((failure) => failure);
console.log(failuresCopy4);

// Create a new server from scratch.. this will be a pure Data API 
// so I will call i 2._Data_API