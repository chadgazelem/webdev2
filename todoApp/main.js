//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-items');
const filterOption = document.querySelector('.todo-form');


//event listeners
todoButton.addEventListener("click", addItem)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)


//functions

function addItem(event) {
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //todo LI 
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;

  todoDiv.appendChild(newTodo);
  if (todoInput.value === "") {
    alert("Please enter your task");
  }

  //Append to Actual LIST
  todoList.appendChild(todoDiv);
  //Clear todo input VALUE
  todoInput.value = ""



  //delete BUTTON
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete_btn')
  todoDiv.appendChild(deleteButton);
  //check mark BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete_btn')
  todoDiv.appendChild(completedButton);

}


//DELETE & CHECK
function deleteCheck(e) {
  const item = e.target;
  //DELETE ITEM
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    //ANIMATION TRANSITION
    todo.classList.add("fall")
    todo.addEventListener('transitionend', function () {
      todo.remove()
    })
  }
  //COMPLETE ITEM
  if (item.classList[0] === 'complete_btn') {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem")
  }
}
//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {
  const todos = todoList.childNodes;
  for (let i = 1; i < todos.length; i++) {
    switch (e.target.value) {
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if (todos[i].classList.contains('completedItem')) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todos[i].classList.contains('completedItem')) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
    }
  }
}