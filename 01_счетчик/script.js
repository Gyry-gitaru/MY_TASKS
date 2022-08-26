const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const zero = document.querySelector(".zero");
const number = document.querySelector(".number");

let a = 0;

let renderNum = arg => number.innerText = arg;

plus.addEventListener ("click", () => {
    a++;
    renderNum(a)
});

minus.addEventListener("click", ()=>{
    a--;
    renderNum(a)
});

zero.addEventListener("click", ()=>{
    a = 0;
    renderNum(a)
});
