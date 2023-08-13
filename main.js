console.log("welcome to tic tac toe")
let turn = "X";

const changeTurn = () =>{
    return turn === "X" ? "O" : "X"
}

const checkWin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 3],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],tic_tac_toe
    [0, 4, 8],
    [2, 4, 6],
  ]
 wins.forEach(e =>{
    if(boxtexts[e[0]].innerText)
 })
}

//games logic:

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            //audio
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

        }
    })
})