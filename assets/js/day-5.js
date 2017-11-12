const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    //panels.forEach(panel => panel.classList.remove("open"));
    this.classList.toggle("open");
}

function toggleactive(e) {
    if (e.propertyName.includes("flex")) {
        //panels.forEach(panel => panel.classList.remove("open-active"));
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleactive));