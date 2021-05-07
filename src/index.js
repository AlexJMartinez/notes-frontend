const users_url = "http://localhost:3000/users"
const notes_url = "http://localhost:3000/notes" 
const note_url = "http://localhost:3000/notes/${id}" 


     
     document.addEventListener('DOMContentLoaded', () => {
        
                 getUsers()
                 getNotes()              
                
})  


function getUsers() {
    fetch(users_url)
      .then(response => response.json())
      .then(renderUsers)               
    };
        

function renderUsers(arg) {
    const users = arg["data"]
        users.forEach(element => {
        const u = new User({id: element.id, ...element.attributes})
          
        u.attachUsersToDom()
              
           
        });
}

function getNotes() {
    fetch(notes_url)
      .then(response => response.json())
      .then(renderNotes)               
    };
        

function renderNotes(arg) {
    const notes = arg["data"]
  
        notes.forEach(element => {
           
            const n = new Note({id: element.id, ...element.attributes})
            // debugger
            n.attachNotesToDom()
           
        });

}


function deleteNote(e) {
    e.target.parentElement.remove()
    const id = e.target.id 

    const configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }

    fetch(note_url, configObj)
        .then(resp => resp.json())
        .then(json => alert(json.message))
      
}



























// ----------------------------------------------------


// window.onload= function (){

// let toggle1 = document.getElementById("toggle-one");

// let login = document.getElementById("login");
// let newNote = document.getElementById("new-note");

// toggle1.addEventListener("click", function() {

//   login.classList.toggle("m-fadeOut");
//   newNote.classList.toggle("m-fadeIn");

// });

// }
