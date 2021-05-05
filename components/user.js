
const users_url = "http://localhost:3000/users" 
const users_show_url = "http://localhost:3000/users/:id"

class User {
    constructor(name, img_url) {
      this.name = name;
      this.img_url = img_url;
    }

    getUsers() {
      fetch(users_url)
        .then(response => response.json())
        .then(users => {
         
          users.data.forEach(user => {
              
              let img = document.createElement("img")
              img.setAttribute("src", `${user.attributes.img_url}`)
              img.setAttribute("id", `${user.id}`)
              img.setAttribute("name", `${user.attributes.name}`)
              
              img.addEventListener('click', function() {
                console.log(user)
                
                ///manipulate DOM here to display associated posts
            })
    
              document.getElementById("user-profiles").appendChild(img)
    
              })
                         
          });
        }
    }

  



  


 