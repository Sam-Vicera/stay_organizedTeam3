class UserService {
    baseUrl = "http://localhost:8083/api/users"


    getAllUsers() {

        let users;

        fetch(this.baseUrl)
                  .then(response => response.json())
                  .then(data => {
                    users = data.map( user => {
                        return {
                            id: user.id,
                            name: user.name,
                        }
                    })
                  })
        return users
    }
}