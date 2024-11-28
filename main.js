// LUMINENCE CALCULATOR
document.getElementById("calclumin").addEventListener("click", red);
function red() {
  // Input
  let R = document.getElementById("red").value;
  let G = document.getElementById("green").value;
  let B = document.getElementById("blue").value;

  // Process
  let lumin = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

  // Output
  document.getElementById("output").innerHTML = Math.round(lumin);
}

// Input
// let R = +prompt("Enter a R colour value (Red):");
// let G = +prompt("Enter a G colour value (Blue):");
// let B = +prompt("Enter a B colour value (Green):");

// // Process
// let lumin = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

// // Output
// console.log(lumin);
