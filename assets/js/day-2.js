function setDate() {
    const secondHand = document.querySelector(".hand-second");
    const minuteHand = document.querySelector(".hand-minute");
    const hourHand = document.querySelector(".hand-hour");


    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();


    (seconds < 10) ? document.querySelector(".seconds").innerHTML = "0" + seconds: document.querySelector(".seconds").innerHTML = seconds;
    (minutes < 10) ? document.querySelector(".minute").innerHTML = "0" + minutes: document.querySelector(".minute").innerHTML = minutes;
    (hours < 10) ? document.querySelector(".hour").innerHTML = "0" + hours: document.querySelector(".hour").innerHTML = hours;


    //console.log(seconds);
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;


    //console.log(secondDegrees);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);