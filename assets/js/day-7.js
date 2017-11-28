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
const title1 = pomtime.querySelector(".title1");
const title2 = pomtime.querySelector(".title2");

const type = pomtime.querySelector(".timetype");

var sesstime = parseInt(ses_num.innerHTML);
var breaktime = parseInt(break_num.innerHTML);

//console.log(sesstime);

reset.style.display = "none";

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

function count() {

    start.style.display = "none";
    reset.style.display = "none";
    breakplus.style.display = "none";
    breakmin.style.display = "none";
    sessplus.style.display = "none";
    sessmin.style.display = "none";
    title2.style.display = "none";
    title1.style.display = "none";
    break_num.style.display = "none";

    type.innerHTML = "Session time:";

    var counter = setInterval(timer, 1000);

    function timer() {
        sesstime -= 1;
        if (sesstime === 0) {
            audio.play();
            clearInterval(counter)
            var startBreak = setInterval(breaktimer, 1000);
            ses_num.style.display = "none";
        };
        ses_num.innerHTML = sesstime;

        function breaktimer() {
            type.innerHTML = "Break Time: ";
            break_num.style.display = "block";
            breaktime -= 1;
            if (breaktime == 0) {
                clearInterval(startBreak);
                type.innerHTML = "";
                break_num.style.display = "none";
                reset.style.display = "block"
            }
            break_num.innerHTML = breaktime;
        }
    }
}

function restart() {
    reset.style.display = "none";

    start.style.display = "block";
    reset.style.display = "block";
    breakplus.style.display = "block";
    breakmin.style.display = "block";
    sessplus.style.display = "block";
    sessmin.style.display = "block";
    title2.style.display = "block";
    title1.style.display = "block";
    break_num.style.display = "block";
    ses_num.style.display = "block";

    break_num.innerHTML = 5;
    ses_num.innerHTML = 5;
    var sesstime = 5;
    var breaktime = 5;
}



// Add some event listeners to call the funcitons above
sessplus.addEventListener("click", addSessTime);

sessmin.addEventListener("click", minusSessTime);
breakplus.addEventListener("click", addBreakTime);
breakmin.addEventListener("click", minusBreakTime);

start.addEventListener("click", count);
reset.addEventListener("click", restart);

//this is something