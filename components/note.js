class Note {

    static all = []
    static container = document.getElementById("user-notes")

    constructor({id, title, content, user_id}) {

        this.title = title;
        this.content = content;
        this.id = id;
        this.user_id = user_id;

        this.element = document.createElement("div")
        this.element.id = `note-${id}`
        this.element.user_id = `${user_id}`

        this.element.addEventListener('click', this.handleDivClick)
    
        Note.all.push(this)
        
    }

    handleDivClick = (e) => {
        if (e.target.innerText === "Delete") {
            deleteNote(e)
        }
    }

    render() {
        this.element.innerHTML = `
            <p id="${this.id}">${this.title}: ${this.content}</p>
            <button class="delete" id="${this.id}">Delete</button> 
        `
        return this.element
    }

    attachNotesToDom() {      
        Note.container.appendChild(this.render())        
    }

}

