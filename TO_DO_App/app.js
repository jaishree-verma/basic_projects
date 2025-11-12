let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);
    let delbtn =document.createElement("button");
    delbtn.innerText=" delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    // console.log(input.value);
    input.value="";
})
let input = document.querySelector("input");
let ul = document.querySelector("ul");
ul.addEventListener("click",function(event){
    console.log(event.target);//help us yo know which button is clicked
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    
    
})
// let del=document.querySelectorAll(".delete");
// for (a of del){
//     a.addEventListener("click",function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     })
// }
// by creating event listen with event bubbling to parent element this will help new task to be added get clicked
