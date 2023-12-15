class ToDo {
    baseUrl = "http://localhost:8083/api/users"


    getAllUsers() {
        fetch(this.baseUrl)
                  .then(response => response.json())
                  .then(users => {
                    
                  })
    }



}