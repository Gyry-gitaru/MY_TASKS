const task = document.querySelector(".block_two");
const inputToDo = document.querySelector("#Do");
const btn = document.querySelector('.upper');

let ID = 0;
const mainArray = [];
console.log(mainArray)

const myStorage = (array) => {
    let storageToDo = localStorage.getItem(`array || '[]'`);
    if(!storageToDo) localStorage.setItem(`array`, JSON.stringify(array));
}
// myStorage(mainArray);

const addToDoList = () => {
    let globalID = ID++;
    let text = inputToDo.value;
    inputToDo.value = '';

    const mainObj = {
        id: globalID,
        text: text,
        complate: false
    };
    console.log(mainObj)

    mainArray.push(mainObj);
}

btn.addEventListener ('click', () => {
    addToDoList();
    myStorage(mainArray);

}) 

// const renderTask = () => {

// }
// renderTask(mainArray);


// const generateToDoList = () => {

//     task.innerHTML = `
//         <div class="item" >
//             <div class="delate"></div>
//             <input class="complited" type="checkbox" id="check">
//             <p></p>
//         </div>`

// }