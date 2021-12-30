/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: "ahjam",
  lastName: "taoufik",

  // Methods
  getFullName: function () {
    return `Full Name: ${user.firstName} ${user.lastName}`;
  },
};

// Accessing Object Properties
console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Bracket Notation

console.log(typeof user.firstName); // String

// Accessing Object Methods
console.log(typeof user.getFullName); // Function
console.log(user.getFullName());