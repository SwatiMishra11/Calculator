const display = document.getElementById("display");

function addToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastOne() {
    display.value = display.value.toString().slice(0,-1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Math Error";
    }
}