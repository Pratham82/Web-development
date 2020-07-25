//*CSS variables with JS */

// Get the root elements from the CSS
let root = document.querySelector(":root");
console.log(root);

//* Get the styles
let rootStyles = getComputedStyle(root);

//* Get property value of specific element in the root
var red = rootStyles.getPropertyValue("--red");
console.log(red); //  #ff6f69

//* Set new styles though JS
//* 1st parameter is the name of the CSS var and 2nd parameter is new value
// root.style.setProperty("--red", "green");

let yellow = rootStyles.getPropertyValue("--yellow");
console.log(yellow); // #ffcc5c

// root.style.setProperty("--yellow", "white");
