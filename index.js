

let btn1 = document.getElementById("popbtn1");
let btn2 = document.getElementById("popbtn2");
let btn3 = document.getElementById("popbtn3");
let btn4 = document.getElementById("popbtn4");
let btn5 = document.getElementById("popbtn5");
let btn6 = document.getElementById("popbtn6");
let btn7 = document.getElementById("popbtn7");


//nav bar fixed
function fixnav() {
    let a = document.getElementById("navbar");
     if (window.scrollY >=50) {
        a.classList.add("navbar2");
     } else {
        a.classList.remove("navbar2");
     }
}

// for remove btn on animated div
let removebtn = document.querySelectorAll("#closebtn");
removebtn.forEach((e)=>{
    e.addEventListener("click",remove)
})
function remove(){
    let b = document.querySelectorAll(".anim");
    b.forEach((e)=>{
        e.classList.remove("active")
    })
    
}


btn1.addEventListener("click",()=> {
    let a = document.getElementById("popup1");
    a.classList.add("active")
     })

btn2.addEventListener("click",()=> {
    let a = document.getElementById("popup2");
    a.classList.add("active")
     })

btn3.addEventListener("click",()=> {
    let a = document.getElementById("popup3");
    a.classList.add("active")
     })

btn4.addEventListener("click",()=> {
    let a = document.getElementById("popup4");
    a.classList.add("active")
     })

btn5.addEventListener("click",()=> {
    let a = document.getElementById("popup5");
    a.classList.add("active")
     })

btn6.addEventListener("click",()=> {
    let a = document.getElementById("popup6");
    a.classList.add("active")
     })

btn7.addEventListener("click",()=> {
    let a = document.getElementById("popup7");
    a.classList.add("active")
     })
