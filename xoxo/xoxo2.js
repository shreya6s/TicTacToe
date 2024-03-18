function getRandomColor(){
    a1 = Math.floor(Math.random() * 256)
    b1 = Math.floor(Math.random() * 256)
    c1 = Math.floor(Math.random() * 256)
    return(`rgb(${a1},${b1},${c1},0.5)`)
}
let cont = document.getElementById("container")
let cat = document.getElementById("cat")
let clr
setInterval(()=>{
   clr=getRandomColor()
   cont.style.boxShadow= `0 10px 20px ${clr}`
   cat.style.boxShadow= `0 -10px 20px ${clr}`
},1000)

let music1 = new Audio("music/audio1.mp3")
let music2 = new Audio("music/audio2.wav")
let music3 = new Audio("music/audio3.wav")
let music4 = new Audio("music/audio4.mp3")
let turn = "X"
let gameOver = false
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

function rand(){
    let r = Math.floor(Math.random() * 8)
    return r 
}

//function for 0 winning
function check0(){
    let boxtexts = document.getElementsByClassName("boxtext")
    let bcount =0
    let ocount =0
    let ptr
    let flag =0
    win.forEach(e =>{
        if(flag==0)
        {
         bcount =0
         ocount =0
        for(let i=0;i<3;i++)
        {
        if(boxtexts[e[i]].innerText == '')
        {
            bcount++
            ptr=e[i]
        }
        else if(boxtexts[e[i]].innerText == '0' )
        {
            ocount++
        }
    }
    flag =0
        if(bcount==1 && ocount == 2)
        {
            boxtexts[ptr].innerText = '0'
            flag=1
            checkWin()
            return 1
        }
    }
    })
    if(flag==0)
    {
        return 0
    }
}

//automatic playing
const nextTurn = () =>{
    let a = check0()
    if(a==0)
    {
    let boxtexts = document.getElementsByClassName("boxtext")
    let bcount =0
    let xcount =0
    let ptr
    let flag =0

    win.forEach(e =>{
        if(flag==0)
        {
         bcount =0
         xcount =0
         ocount =0
        for(let i=0;i<3;i++)
        {
        if(boxtexts[e[i]].innerText == '')
        {
            bcount++
            ptr=e[i]
        }
        else if(boxtexts[e[i]].innerText == 'X' )
        {
            xcount++
        }
    }
    flag =0
        if(bcount==1 && xcount == 2)
        {
            boxtexts[ptr].innerText = '0'
            flag=1
        }
    }
    })
    if(flag==0)
    {
        if(flag==0)
        {
        let num = rand()
        while(boxtexts[num].innerText!= "")
        {
            num = rand()
        }
        boxtexts[num].innerText = '0'
    }
}
}

if(!gameOver){
    document.getElementById("info").innerText = "Turn for X"
}
turn='X'
}

//function to check for win
const checkWin = () =>{
    let count=0
    let boxtexts = document.getElementsByClassName("boxtext")
    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&(boxtexts[e[0]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText != '')
        {
            document.getElementById("info").innerText = turn + " WON!!"
            if(turn=="X")
            {
            music3.play()
            }
            else if(turn =="0")
            {
                music4.play()
            }
            gameOver=true
        }
        else if(boxtexts[e[0]].innerText !="" && boxtexts[e[1]].innerText != "" && boxtexts[e[1]].innerText != "")
        {
            count++
        }
    })
    if(count==8)
    {
        document.getElementById("info").innerText = "Game Over"
        music4.play()
        gameOver=true
    }
}

//Game
music1.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '' && gameOver == false && turn == 'X'){
            boxtext.innerText = turn
            music2.play()
            checkWin()
            turn='0'
            if(!gameOver){
                document.getElementById("info").innerText = "Turn for 0"
                setTimeout(nextTurn, 1000);
            }
        }
      
    })

})

//reset

let reset = document.getElementById("reset")
reset.addEventListener('click',() =>{
    let boxtexts= document.getElementsByClassName("boxtext")
    Array.from(boxtexts).forEach(element =>{
        element.innerText=''
        document.getElementById("info").innerText = "Turn for X"
        turn = 'X'
        gameOver=false
    })
})