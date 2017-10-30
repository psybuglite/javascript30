console.log("Its working");


window.addEventListener("keydown", function(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if (!audio) return; //prevents the function from running in this case
    audio.currentTime = 0; //rewind to the start
    audio.play();

    key.classList.add("playing");
})


function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skips if its not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))