let music = new Audio("music.mp3") 
let turnMusic = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let isGameOver = false

//Function to change the turn
const changeTurn = () =>{
    return turn === "X"?"0":"X"
}

//Function to chake for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !==" " )){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            isGameOver = true  
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "160px"
            
        }
    })
}

//Main game Logic 
//music.play()
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element=>{
    let boxtex = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtex.innerText === ''){
            boxtex.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerHTML= "Trun for" + turn
            }
        }
    })
})