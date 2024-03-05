// CALCULATOR PRIGRAM

let display = document.getElementById("display");

function appendToDo(input) {
  display.value += input;
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error"
    }
}

function clearData() {
  display.value = "";
}
