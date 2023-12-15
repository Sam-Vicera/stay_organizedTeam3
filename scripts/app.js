// declaring services
let toDoService;
let userService;

// declaring controls / DOM elements
let userDropdown;

document.addEventListener("DOMContentLoaded", () => {
    toDoService = new ToDoService();
    userService = new UserService();

    userDropdown = document.getElementById("userDropdown");

    userDropdown.addEventListener("change", displayTasks);

    loadUsers();
})

async function loadUsers() {
    const users = await userService.getAllUsers();


    users.forEach(user => {
        const option = new Option(`${user.id}. ${user.name}`);
        userDropdown.appendChild(option)
        
    });
    
}

function displayTasks(tasks) {
    
    if("content" in document.createElement("template")){
        const displayContainer = document.getElementById("tasksDisplay")

        displayContainer.innerHTML = "";

        console.log(toDoService.getUserTask())
        
        // tasks.forEach(task => {
        //     addTask(task, displayContainer)
        // })

    }
}

function addTask(){

}