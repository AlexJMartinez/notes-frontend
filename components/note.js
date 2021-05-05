const notes_url = "http://localhost:3000/notes"

class Note {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
    
    getNotes() {
      fetch(notes_url)
        .then(response => response.json())
        .then(notes => {
         
          notes.data.forEach(note => { 

           
            
          });
        })
    }
}