// ===============================
// Part 2: Functions, Scope, Params & Return Values
// ===============================

// Global variable
let globalCount = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b;
}

// Function demonstrating local scope
function incrementCounter() {
  let localCount = 0; // local scope
  localCount++;
  globalCount++;
  console.log("Local Count:", localCount);
  console.log("Global Count:", globalCount);
}

// Using the functions
console.log("Sum of 5 + 3 =", addNumbers(5, 3)); // returns 8
incrementCounter();
incrementCounter(); // Local resets, global keeps increasing

// ===============================
// Part 3: Combine CSS + JavaScript
// ===============================

const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// Event listener triggers CSS animation
animateBtn.addEventListener("click", () => {
  toggleAnimation(jsBox, "animate");
});
