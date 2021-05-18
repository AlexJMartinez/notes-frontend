const users_url = "http://localhost:3000/users"
const notes_url = "http://localhost:3000/notes" 

document.addEventListener('DOMContentLoaded', () => {
        
                 getUsers()
                 getNotes()      
                
})  

//async

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


const form = document.getElementById("new-note")

//async

form.addEventListener('submit', createNote)

function createNote(e) {
 
    e.preventDefault()
   
    titleInput = document.getElementById("titleInput")
    contentInput = document.getElementById("contentInput")
    userId = document.getElementsByTagName("img")[0].id

    const noteValues = {
        title: titleInput.value,
        content: contentInput.value,
        user_id: userId
    }
                     
    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(noteValues)
     }

    fetch(notes_url, configObj)
       .then(resp => resp.json())
       .then(json => {
           
           const newNote = new Note({id: json.data.id, ...json.data.attributes})
         
           newNote.attachNotesToDom()

           titleInput.value = ''
           contentInput.value = ''

       })
    }
                
//async

function getNotes() {
    fetch(notes_url)
      .then(response => response.json())
      .then(renderNotes)               
    };
// getNotes and renderNotes have to do with page load rendering the
// collection of notes already in the db to the page for the particular user,
// this is different than whats happening in my createNote function which is 
// creating a note and attaching it to the DOM asynchronously.        

function renderNotes(arg) {
    const notes = arg["data"]
    
        notes.forEach(element => {
            
            const n = new Note({id: element.id, ...element.attributes})
       
            n.attachNotesToDom()
           
        });

}

//async 

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

    fetch(`http://localhost:3000/notes/${id}`, configObj)
        .then(alert("note erased!"))
      
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
