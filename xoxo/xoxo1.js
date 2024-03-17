let music1 = new Audio("music/audio1.mp3")
let music2 = new Audio("music/audio2.wav")
let music3 = new Audio("music/audio3.wav")
let music4 = new Audio("music/audio4.mp3")
let turn = "X"
let gameOver = false


//function to change turn
const changeTurn = () =>{
    return turn === "X"?"0":"X"
}

//function to check for win
const checkWin = () =>{
    let count=0
    let boxtexts = document.getElementsByClassName("boxtext")
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

    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&(boxtexts[e[0]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText != '')
        {
            document.getElementById("info").innerText = turn + " WON!!"
            music3.play()
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
        if(boxtext.innerText === '' && gameOver == false){
            boxtext.innerText = turn
            music2.play()
            checkWin()
            turn =changeTurn()
            if(!gameOver){
            document.getElementById("info").innerText = "Turn for "+turn
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
        gameOver=false
    })
})