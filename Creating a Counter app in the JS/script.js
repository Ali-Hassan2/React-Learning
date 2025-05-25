let para = document.querySelector("#sp")
let btn = document.querySelector("#bt")


let counter = 0;
btn.addEventListener("click",function(){
    counter++;
    para.textContent = counter;
})