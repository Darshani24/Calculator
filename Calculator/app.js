const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calciBTN");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const equal = document.getElementById("equal");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.value;
  });
});

clear.addEventListener("click", () => {
  display.value = "";
});

backspace.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

equal.addEventListener("click", () => {
  try {
    display.value = math.evaluate(display.value);
  } catch (e) {
    display.value = "Error";
  }
});
