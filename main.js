//Taking data from HTML form
let mybtn = document.querySelector(".button");
let myerror = document.querySelector(".error");
let myli = document.getElementsByTagName("li");

//After Button click Events
mybtn.addEventListener("click", ()=>{
    let mydata = document.querySelector(".data").value;
    if(mydata === null || mydata == ""){
        myerror.innerHTML = "Please enter any To do..." 
        setTimeout(function(){
            myerror.innerHTML = ""; 
        },2000)    
    }
    else{
       var node = document.createElement('li');
       var textnode = document.createTextNode(mydata);
       node.appendChild(textnode);
       document.getElementById("myList").appendChild(node);
       node.addEventListener("click", ()=>{
           node.style.textDecoration = "line-through";
       })
       node.addEventListener("dblclick", ()=>{
           node.remove();
       })
    }

    document.querySelector(".data").value = ""; 
})