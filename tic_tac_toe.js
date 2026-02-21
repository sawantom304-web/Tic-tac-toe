let cells = document.querySelectorAll(".cell");
let msg = document.getElementById("msg");

let turn = "X";
let board = ["","","","","","","","",""];
let gameOver = false;

let win = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach((cell,i)=>{
    cell.onclick = () => {
        if(board[i] !== "" || gameOver) return;

        board[i] = turn;
        cell.innerText = turn;

        checkWin();
        turn = turn === "X" ? "O" : "X";
    }
});

function checkWin(){
    for(let c of win){
        let [a,b,c2] = c;
        if(board[a] && board[a] === board[b] && board[b] === board[c2]){
            msg.innerText = board[a] + " Wins!";
            gameOver = true;
            return;
        }
    }

    if(!board.includes("")){
        msg.innerText = "Draw!";
        gameOver = true;
    }
}

function reset(){
    board = ["","","","","","","","",""];
    gameOver = false;
    turn = "X";
    msg.innerText = "";
    cells.forEach(c=>c.innerText="");
}