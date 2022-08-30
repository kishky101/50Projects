const inputField = document.querySelector(".input_field")
const searchIcon = document.querySelector(".btn")
const division = document.querySelector('.division')

searchIcon.addEventListener("click", function() {
       division.classList.toggle("hidden");
       inputField.focus();
})


//all var from the DOM
// const searchContainer = document.querySelector('.search-container');
// const searchButton = document.querySelector('.search-button');
// const searchInput = document.querySelector('.search-input');

// searchButton.addEventListener('click', function () {
//     searchContainer.classList.toggle('active');
// }) 


// const input = [1, 'apple', 'ball', undefined]
// let newArray = [];


// input.forEach((element) => {
//      if(typeof(element) ==='string') {
//           newArray.push(element.toUpperCase())
//      }
    
// }) 
// console.log(newArray)