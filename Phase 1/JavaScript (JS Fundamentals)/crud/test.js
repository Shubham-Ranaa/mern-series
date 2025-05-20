// //Stores the data in the browser.
// let user_input1 = localStorage.setItem("name", "John");
// let user_output1 = localStorage.getItem("name");
// console.log(user_output1);

// //Stores the data in the browser.
// let user_input2 = localStorage.setItem("John");     //gives an error beacause it does not have a key.
// let user_output2 = localStorage.getItem("John");
// console.log(user_output2);

// //stores the key pair value in the browser.
// let user_input3 = {name: "John", age: 30, city: "New York"};
// localStorage.setItem("user", JSON.stringify(user_input3));

// let user_output3 = JSON.parse(localStorage.getItem("user"));

// console.log( user_output3);  // print the whole object.

// console.log(user_output3.name);  // print the name.
// console.log(user_output3.age);  // print the age.
// console.log(user_output3.city);  // print the city.

// stores using push method.
let user_input4 = {name: "John", age: 30, city: "New York"};
let user_input5 = {name: "shubhan", age: 20, city: "New Delhi"};

let users = [];
users.push(user_input4);
users.push(user_input5);

localStorage.setItem("user", JSON.stringify(users));

let user_output = JSON.parse(localStorage.getItem("user"));

// Output all users
console.log("all users",user_output);

// Output specific users by index
console.log("First user:", user_output[0]);  // John's data
console.log("Second user:", user_output[1]); // Shubhan's data

// Output specific properties of specific users
console.log("First user's name:", user_output[0].name);  // John
console.log("Second user's city:", user_output[1].city); // New Delhi

