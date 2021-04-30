window.onload= function (){

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome!")
})

let toggle1 = document.getElementById("toggle-one");

let login = document.getElementById("login");
let newNote = document.getElementById("new-note");

toggle1.addEventListener("click", function() {

  login.classList.toggle("m-fadeOut");
  newNote.classList.toggle("m-fadeIn");

});

}
