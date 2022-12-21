const API = `https://6346d720db768439769fce8f.mockapi.io`;

const getFile = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options);
    let response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
};

const generateToDoList = async () => {
    const tasks = await getFile(API+`/TodoList`);
    // console.log(tasks);
    const newList = tasks.map((item) => 
        `<div class="item">
            <div onclick="deleteTodo('${item.id}')" class="delete"></div>
            <input class="completed ${item.completed && "active"}" onclick="checkedList(${item.id})" type="checkbox" ${item.completed && "checked"}>
            <p>${item.text}</p>
        </div>`
    ).join('');
    document.querySelector('.container_todo').innerHTML = newList;
};

generateToDoList()