console.log("hello")

let todo_list = document.getElementById("todo-list");
let todo_btn = document.getElementById("todo-btn");


todo_btn.addEventListener("click", addTodo);

function addTodo() {
    let todo_input = document.getElementById("input-todo");
    let todo_value = document.getElementById("input-todo").value;
    let output = `<li class="todo-item"><h3>${todo_value}</h3></li>`;
    todo_list.insertAdjacentHTML("beforeend", output);
    todo_input.value = "";
}