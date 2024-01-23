const inputBox=document.getElementById("input-box");
const listCont=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("Write something !!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCont.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        
    }
    inputBox.value="";
    dataSave();
}
listCont.addEventListener("click",function(ev){
    if(ev.target.tagName ==="LI"){
        ev.target.classList.toggle("check");
        dataSave();
    }
    else if(ev.target.tagName ==="SPAN"){
        ev.target.parentElement.remove();
        dataSave();
    }
},false);

function dataSave(){
    localStorage.setItem("data",listCont.innerHTML);
}
 function showData(){
    listCont.innerHTML=localStorage.getItem("data");
 }
 showData();