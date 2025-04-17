const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Input needed !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    //toggle the check/uncheck status when clicked on the list
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //remove the task when click on the span(x)
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//store the data in the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//display the saved data after the browser is opened/refreshed
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();