const toDo = document.querySelector('.block_two');
const btn = document.querySelector('.upper');
const input = document.querySelector('#Do');
const delate = document.querySelector('.delate');
// const arr = ['I', 'Don`t know', 'JS'];



const generateTask = (task, index) => {
    return `
        <div class="item" >
            <div data-index=${index} onclick="delateInput('${index}')" class="delate"></div>
            <input data-index=${index} onclick="checkedInput('${index}')" class="complited" type="checkbox" id="check">
             <p>${task}</p>
        </div>`
        
};

const addTodo = (text) => {
    arr.push(text);
}


const renderArr = (array) => {
    let str = array
        .map((word, index) => generateTask(word, index))
        .join(' ');
    
    toDo.innerHTML = str;
}
// renderArr(arr);

btn.addEventListener("click", () => { 
    let text = input.value;
    console.log(text);
    addTodo(text)
    renderArr(arr)

    console.log(arr);
    
});

const checkedInput = (index) => {
   document.querySelectorAll(".complited")[index].classList.toggle('active'); 
}

const delateInput = (index) => {
    arr.splice(index, 1);
    renderArr(arr)
}

// addTodo(voiwvijow)
// update (vefk)
/* 
addTodo
    getSome
        
*/

const foo = 'undefined';
console.log(typeof foo);