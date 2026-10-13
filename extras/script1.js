console.log("hello");
var count=0;
var bool=false;

const button = document.getElementById('button');
const label = document.getElementById('label');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
const show=document.getElementById("show");

button.addEventListener('click',()=>  {
    count =count+1;
    bool =true;
    label.textContent =`Count : ${count}`;
    
})
// function countnum(){
//     document.getElementById(lab).

minus.addEventListener('click',()=> {
   count =count -1;
   bool =true;
   label.textContent =`Count : ${count}`;
})

reset.addEventListener('click',()=>{
    count = 0;
    bool = true;
    label.textContent =`Count : ${count}`;
})

show.addEventListener('click',()=>{
    bool = !bool;
    console.log(bool);
    label.textContent=`${bool?`Count : ${count}`:``}`
})

var light = true;

const tog=document.getElementById("togg");
const part =document.getElementById("part");
const page =document.getElementById("page");

tog.addEventListener('click',()=>{
    light=!light;

    part.className=`${light?"main":"main2"}`;
    page.className 
})

