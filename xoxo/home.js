function getRandomColor(){
    a1 = Math.floor(Math.random() * 256)
    b1 = Math.floor(Math.random() * 256)
    c1 = Math.floor(Math.random() * 256)
    return(`rgb(${a1},${b1},${c1},0.5)`)
}
let cont = document.getElementById("container")
let clr
setInterval(()=>{
   clr=getRandomColor()
   cont.style.boxShadow= `0 10px 20px ${clr}`
},1000)

let music2 = new Audio("music/audio2.wav")

let single = document.getElementById("btn1")
let multi = document.getElementById("btn2")

function sound(){
    music2.play()
}

single.addEventListener("mouseover",sound)
multi.addEventListener("mouseover",sound)

single.addEventListener("click",()=>{
    window.location.assign("xoxo2.html");
})
multi.addEventListener("click",()=>{
    window.location.assign("xoxo1.html");
})