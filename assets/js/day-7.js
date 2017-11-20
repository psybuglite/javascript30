//call every needed item you need to work with

const pomtime = document.querySelector(".pom-time");
const ses_num = pomtime.querySelector(".session-nums");
const sessmin = pomtime.querySelector(".minus-session");
const sessplus = pomtime.querySelector(".plus-session");
const reset = pomtime.querySelector(".reset");

const break_num = pomtime.querySelector(".break-nums");
const breakmin = pomtime.querySelector(".minus-break");
const breakplus = pomtime.querySelector(".plus-break");

const start = pomtime.querySelector(".start");
const audio = pomtime.querySelector(".buzz");

var sesstime = parseInt(ses_num.innerHTML);
var breaktime = parseInt(break_num.innerHTML);
//console.log(sesstime);


// some functions to do whatever I tell them.. like a boss
function addSessTime() {
    sesstime += 5;
    ses_num.innerHTML = sesstime;
}

function minusSessTime() {
    if (sesstime > 5) {
        sesstime -= 5;
        ses_num.innerHTML = sesstime;
    }
}

function addBreakTime() {
    breaktime += 5;
    break_num.innerHTML = breaktime;
}

function minusBreakTime() {
    if (breaktime > 5) {
        breaktime -= 5;
        break_num.innerHTML = breaktime;
    }
}


// Add some event listeners to call the funcitons above
sessplus.addEventListener("click", addSessTime);

sessmin.addEventListener("click", minusSessTime);
breakplus.addEventListener("click", addBreakTime);
breakmin.addEventListener("click", minusBreakTime);