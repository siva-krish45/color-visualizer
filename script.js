const btn = document.getElementById("Generate");
const input = document.getElementById("input");
const container = document.querySelector(".outputcontainer");


btn.addEventListener("click", function(){
    const box = document.createElement("div");
    box.style.backgroundColor = input.value;
    container.appendChild(box);
    input.value="";
});