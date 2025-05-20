//declaration of object
let colorsObj = {
    color1: "red",
    color2: "green", 
    color3: "blue",
    color4: "yellow",
    color5: "orange",
    color6: "pink"
};

// storing data in local storage
localStorage.setItem("colors", JSON.stringify(colorsObj));
// console.log(colorsObj);

// retriving data from local storage
let data = JSON.parse(localStorage.getItem("colors"));
// console.log(data);

// console.log(data.color1);
// console.log(data.color2);
// console.log(data.color3);
// console.log(data.color4);

// stores using object properties
let users = {
    user1: {name: "John", age: 30, city: "New York"},
    user2: {name: "shubhan", age: 20, city: "New Delhi"}
};

localStorage.setItem("user", JSON.stringify(users));

let user_output = JSON.parse(localStorage.getItem("user"));

// Output all users
console.log("all users", user_output);

// Output specific users
console.log("First user:", user_output.user1);  // John's data
console.log("Second user:", user_output.user2); // Shubhan's data

// Output specific properties of specific users
console.log("First user's name:", user_output.user1.name);  // John
console.log("Second user:", user_output.user1.age); // 30
console.log("Second user's city:", user_output.user2.city); // New Delhi

// Output specific properties of specific users
console.log("First user's name:", user_output.user1.name);  // John
console.log("Second user's city:", user_output.user2.city); // New Delhi
