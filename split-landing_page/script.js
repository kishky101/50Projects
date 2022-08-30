const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', leftHoverAdd)
left.addEventListener('mouseleave', leftHoverRemove)


right.addEventListener('mouseenter', rightHoverAdd)
right.addEventListener('mouseleave', rightHoverRemove)

function leftHoverAdd() {
   return container.classList.add('hover-left')
}
function leftHoverRemove() {
    return container.classList.remove('hover-left')
}
function rightHoverAdd() {
    container.classList.add('hover-right')
}
function rightHoverRemove() {
    container.classList.remove('hover-right')
}