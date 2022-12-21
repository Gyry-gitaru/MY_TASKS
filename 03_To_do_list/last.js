let listTodo = [];
const STORAGE_NAME = "todos";

const generateToDoList = (list) => {
    const newList = list.map((item) => 
        `<div class="item">
            <div onclick="deleteTodo('${item.id}')" class="delete"></div>
            <input class="completed ${item.completed && "active"}" onclick="checkedList(${item.id})" type="checkbox" ${item.completed && "checked"}>
            <p>${item.text}</p>
        </div>`
    ).join('');
    localStorage.setItem(STORAGE_NAME, JSON.stringify(list));
    document.querySelector('.container_todo').innerHTML = newList;
};

const createTodoList = () => {
    const text = document.querySelector("#Do").value;
    document.querySelector("#Do").value = '';

    const objList = {
        id: Date.now(),
        text,
        completed: false
    }

    listTodo.push(objList);
    generateToDoList(listTodo);
};

document.querySelector('.btn').addEventListener('click', createTodoList);

const deleteTodo = (id) => {
    let LIST = [];
    listTodo.map((item) => {
        if(item.id != id) {
            LIST.push(item)
        }
    })
    listTodo = LIST;
    generateToDoList(listTodo);
};

const checkedList = (id) => {
    listTodo.map((item) => {
        if(item.id === id) {
            item.completed = !item.completed;
        }
    });
    generateToDoList(listTodo);
};

const initApp = () => {
    if (Array.isArray(JSON.parse(localStorage.getItem(STORAGE_NAME)))) {
        listTodo = JSON.parse(localStorage.getItem(STORAGE_NAME));
        generateToDoList(listTodo);
    }
};
initApp();
