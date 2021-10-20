var inputWork=document.querySelector(".form-input>input");
var addBtn=document.querySelector(".form-input>button");
inputWork.onkeyup=function(){
    if(inputWork.value){
        addBtn.classList.add("active");
    }else
        addBtn.classList.remove("active")
}
showWorks();
addBtn.onclick=()=>{
    let userData=inputWork.value;
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr))
    showWorks();
}
function showWorks(){
    var list=document.querySelector(".list")
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    var html='';
    listArr.forEach((element,index) => {
        html+=`<li><p>${element}</p> <span onclick=deleteWorks()>Delete</span></li>`;
    });
    list.innerHTML=html;
    inputWork.value="";
}
function deleteWorks (index){
    let getLocalStorage=localStorage.getItem("New Todo");
    var arr=JSON.parse(getLocalStorage)
    console.log(arr)
    arr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(arr));
    showWorks();
}
function clearAll (){
    localStorage.removeItem("New Todo");
    showWorks();
}
