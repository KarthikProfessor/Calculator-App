const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

// eval --> it is a mini calculator built-in func
// syntax: eval(value);
function calculate() {
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = "Error";
  }
}

function clearScreen() {
  display.value = "";
}
