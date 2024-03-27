const input1 = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');


function add_value(){
if(input1.value === '')
{
    alert("!!Please write your task!!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = input1.value;
    listContainer.appendChild(li); 
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
input1.value = "";
saveData();
}


listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classlist.toggle("checked");
    saveData();
}
else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}     
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();