const task = document.querySelector("#Do");
const wrapper = document.querySelector('.block_two');
// const toDo = [];
// let globalID = 0;
// let previosToDo = [];


function generationToDoList (item) {
    console.log(item.id)
    return `
        <div class="item" ${item.compl ? 'checked': ''}>
            <div onclick="deleteTask(${item.id})" class="delate"></div>
            <input onclick="complitedTask(${item.id})" class="complited" type="checkbox" id="check" ${item.compl ? 'checked': ''}>
            <p>${item.text}</p>
        </div>`  
}

// const renderToDo = () => {
//     wrapper.innerHTML = '';
//     if(toDo.length > 0) {
//         toDo.forEach((item) => {
//             wrapper.innerHTML += generationToDoList(item);
//         });
//         // previosToDo = document.querySelectorAll('.item')
//     }
// }

const complitedTask = index => {
    // console.log(index);
    toDo[index].compl = !toDo[index].compl;
    if(toDo[index].compl) {
        previosToDo[index].classList.add('checked');
    } else {
        previosToDo[index].classList.remove('checked');
    }
}

// const deleteTask = index => {
//     console.log(index);
//     toDo.splice(index, 1);

// }

// const addTodo = () => {
//     const text = document.getElementById('Do').value;
//     document.getElementById('Do').value = '';
//     let id = globalID ++;
//     const obj = {
//         id: id,
//         text: text,
//         compl: false
//     }

//     toDo.push(obj);
// }

// document.querySelector(`.upper`).onclick = () => {
//     addTodo();
//     renderToDo()
// }




