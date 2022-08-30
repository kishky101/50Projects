const loadText = document.querySelector('.load_text');
const bg = document.querySelector('.bg');

let load = 0;

 const Int = setInterval(blurrying, 30);



function blurrying() {
    load++; 

    if (load > 99) {
        clearInterval(Int)
    }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

// function to map a range of numbers to another range of numbers.
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}