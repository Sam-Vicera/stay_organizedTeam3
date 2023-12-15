class ToDoService {

    baseUrl = "http://localhost:8083/api/todos"

    getUserTask() {
        const userSelection = document.getElementById("userDropdown").value

        const userSelectionId = userSelection[0]

        // console.log(userSelectionId)
        return fetch(this.baseUrl + "?userid=" + userSelectionId)
                  .then(Response => Response.json())
                  .then(data => {
                    return data
                  })


    }
    



}





// once you select a dropdown option
// you want to retrieve the id from that selection
// once that is done, you can do a fetch baseUrl + id

// template pseudo
// 1st. function displayTasks and function addTask
// in function displayTasks will be to select tasksDisplayContainer 
// after that is done we want to clear container. 
// forEach task, then we call addTask, passing in a task first, and then for second param: displayContainer
// the addTask function will look like: first we select the template, then assign each property, then append that template to the
// displayContainer.