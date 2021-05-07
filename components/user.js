class User {

    static all = []
    static container = document.getElementById("user-profiles")

    constructor({id, name, img_url}) {
      this.id = id;
      this.name = name;
      this.img_url = img_url;
      
      this.element = document.createElement("img")

      this.element.addEventListener('click', this.handleImgClick)
     
   
      User.all.push(this)
    }


    render() {
      this.element.setAttribute("src", `${this.img_url}`)
      this.element.setAttribute("id", `${this.id}`)
      this.element.setAttribute("name", `${this.name}`)

      return this.element
    }

    attachUsersToDom() {      
      User.container.appendChild(this.render())        
    }

    handleImgClick() {
      let x = document.getElementById("new-note");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    }

  
    
    


    //         
    //           img.setAttribute("src", `${user.attributes.img_url}`)
    //           img.setAttribute("id", `${user.id}`)
    //           img.setAttribute("name", `${user.attributes.name}`)
              
    //           img.addEventListener('click', function() {
    //            user.attributes.notes.forEach(note => {
    //               console.log(note)
    //               


    //            }); 
                
    //         });
    
    //           document.getElementById("user-profiles").appendChild(img)
    
    //           });
                         
    //       });
    //     }
    

  



  


 