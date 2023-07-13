let stvElement = document.getElementById("stv");
let mtvElement = document.getElementById("mtv");

document.addEventListener("keydown", function(e){
    mtvElement.style.color = "blue";
    mtvElement.innerText = e.key + "Is keyDown"
});

document.addEventListener("keyup", function(e){
    mtvElement.style.color = "green";
    mtvElement.innerText = e.key + "ls Keyup"
});