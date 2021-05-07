class User {

    static all = []

    constructor({id, name, img_url}) {
      this.id = id;
      this.name = name;
      this.img_url = img_url;

      this.element = document.createElement("img")
   
      debugger
      User.all.push(this)
    }

  
              
    //           let img = document.createElement("img")
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
    }

  



  


 