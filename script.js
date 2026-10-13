var light = true;
var prof = true;

const navbar = document.getElementById("navbar");
const sec = document.getElementById("sec");
const mode = document.getElementById("mode");
const photo = document.getElementById("photo");
const hide=document.getElementById("hide");
const save=document.getElementById("save");
const down = document.getElementById("down"); 


    navbar.className=`${light?"nav1":"nav2"}`;
    sec.className=`${light?"home1":"home2"}`;
    photo.className=`${prof?"present":"hidden"}`;
    



    hide.addEventListener('click',()=>{
        prof = !prof;
         photo.className=`${prof?"present":"hidden"}`;


    })
    

    mode.addEventListener('click',()=>{
        light = !light;
        navbar.className=`${light?"nav1":"nav2"}`;
        sec.className=`${light?"home1":"home2"}`;

    })

    var count = 0 ;

    save.addEventListener('click',()=>  {
    count =count+1;
    save.textContent =`Save:${count}`;
    
})

