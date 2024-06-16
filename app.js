
    let board = [
        '', '', '',   // b1, b2, b3
        '', '', '',   // b4, b5, b6
        '', '', ''    // b7, b8, b9
    ];
    let visitedArray =[ false, false, false, 
                        false, false, false, 
                        false, false, false ];

    function updateBoard(position, player) {
        board[position] = player;
    }

    let gameOver = false;
    let player = "X";
    let text = document.querySelector(".text");

    let boxes = document.querySelectorAll(".box"); //this gives nodeList
    //console.log('boxes: ',boxes);
    let boxArray = Array.from(boxes);   //this give Array
    //console.log('boxArray', boxArray);
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            if (!gameOver && visitedArray[boxArray.indexOf(box)] != true) { 
                if (player == "X") {
                    box.style.backgroundImage = 'url("X.png")';
                    let indx = boxArray.indexOf(box); 
                    updateBoard(indx, player);
                    visitedArray[boxArray.indexOf(box)] = true;
                    
                } else {
                    box.style.backgroundImage = 'url("O.png")';
                    let indx = boxArray.indexOf(box); 
                    updateBoard(indx, player);
                    visitedArray[boxArray.indexOf(box)] = true;
                }
                if(player === "X"){
                    text.style.backgroundImage = 'url("Oturn.png")';
                }
                else if(player === "O"){
                    text.style.backgroundImage = 'url("Xturn.png")';
                }
                winCondition(player);
                player = player === "X" ? "O" : "X";
            }
        });
    });

function winCondition(){
    if(board[0] === player && board[1] === player && board[2] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}
    else if(board[3] === player && board[4] === player && board[5] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}
    else if(board[6] === player && board[7] === player && board[8] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}

    else if(board[0] === player && board[3] === player && board[6] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}
    else if(board[1] === player && board[4] === player && board[7] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}
    else if(board[2] === player && board[5] === player && board[8] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}

    else if(board[0] === player && board[4] === player && board[8] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}
    else if(board[6] === player && board[4] === player && board[2] === player) { gameOver = true; printResult(player); console.log(`${player} wins`)}
}
function printResult(player){
    if(player === "X"){
        text.style.backgroundImage = 'url(Xwin.png)';
    }
    else{
        text.style.backgroundImage = 'url(Owin.png)';
    }
}
