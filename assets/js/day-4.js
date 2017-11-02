var runningTotal = "";
var result = document.querySelector(".display");

var buttons = Array.from(document.querySelectorAll("p"));

function handleComputation(event) {

    this.classList.add("playing")

    var content = event.currentTarget.textContent;
    //console.log(content);
    if (content === "c") {
        runningTotal = "";
        result.innerHTML = runningTotal;
    } else if (content === "=") {
        runningTotal = eval(runningTotal);
        result.innerHTML = runningTotal;
    } else if (content === "+" || content === "/" || content === "*" || content === "-") {
        runningTotal = result.innerHTML + content;
        result.innerHTML = runningTotal;
    } else {
        runningTotal += content;
        result.innerHTML = runningTotal;
    }
}

buttons.forEach(function(button) {
    button.addEventListener("click", handleComputation, false);
});

function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skips if its not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll("p");
console.log(keys);
keys.forEach(key => key.addEventListener("transitionend", removeTransition))