
var disply = document.getElementById("disply");

function append(value) {
    disply.value += value
}

function delchar() {
   disply.value = disply.value.slice(0,-1); 
}

function clearall() {
 disply.value = "";
}

function calculate() {
    disply.value = eval(disply.value);
}
