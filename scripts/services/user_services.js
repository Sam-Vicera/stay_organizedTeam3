class UserService {
    baseUrl = "http://localhost:8083/api/users"


    getAllUsers() {

        // let users;

       return fetch(this.baseUrl)
                  .then(response => response.json())
                  .then(data => {
                    return data.map( user => {
                        return {
                            id: user.id,
                            name: user.name,
                        }
                    })
                  })
        
    }
}