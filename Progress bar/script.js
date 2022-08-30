const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let activeCircle = 1;

nextBtn.addEventListener("click", () => {
    activeCircle++;

    if(activeCircle > circles.length) {
        activeCircle = circles.length
    }
    
    update();
})

prevBtn.addEventListener("click", () => {
    activeCircle--;

    if(activeCircle  < 1) {
        activeCircle = 1
    }
    
    update()
})

function update() {
    circles.forEach((circle, idx) => {

        if(activeCircle > idx) {
            circle.classList.add("active")
        }else {
            circle.classList.remove("active")
        }
    })

    progressWidth();
    
    disablingButtons();
   
}

function progressWidth() {
    const actives = document.querySelectorAll(".active");
    
    progress.style.width = (((actives.length -1) / (circles.length -1)) * 100) + "%";

}

function disablingButtons() {
     if(activeCircle === 1 ) {
        prevBtn.disabled = true;
    }else if(activeCircle === circles.length) {
        nextBtn.disabled = true
    }else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}