document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    const handlePress = () => button.classList.add("pressed");
    const handleRelease = () => button.classList.remove("pressed");

    button.addEventListener("mousedown", handlePress);
    button.addEventListener("mouseup", handleRelease);
    button.addEventListener("mouseleave", handleRelease);

    button.addEventListener("touchstart", handlePress, { passive: true });
    button.addEventListener("touchend", handleRelease);
    button.addEventListener("touchcancel", handleRelease);
  });
});

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function ClearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById('display').style.color = 'white';
}

function Calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value)

  if (display.value === "NaN") {
  display.value = "Syntax Error"
  }
  
  if (display.value === "Infinity") {
  display.value = "Cannot divide by 0";
  }
  
  if (display.value === "32") {
    display.value = "we don talk bout 32";
    display.style.color = 'red'
  }
  
  }
  catch (error) {
    display.value = "Syntax Error";
  }
}
 
