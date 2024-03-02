const box=document.querySelector(".container");

document.addEventListener("keydown",e =>{
    box.querySelector(".num").innerText=e.key;
    box.querySelector(".button").innerText=e.keyCode;
    box.classList.add("active");
    console.log(e);
});
