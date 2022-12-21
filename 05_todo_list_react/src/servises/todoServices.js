const API = `https://6399fd66e916a46ec0a5b677.mockapi.io/todoList`;

export const getTodoList = () => fetch(API).then(data => data.json());

export const updateItem = (id, obj) => fetch(API + `/${id}`, {
    method: `PUT`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());

export const deleteItem = (id) => fetch(API + `/${id}`, {
    method: `DELETE`
}).then(data => data.json());

export const addNewTodoItem = (obj) => fetch(API, {
    method: `POST`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());