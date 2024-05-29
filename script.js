const board = document.querySelector('.board');
let currentPlayer = 'X';
let winner = null;
const cells = Array.from({length : 9} ).fill(null);


function checkWinner() {
    const pattern =[
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7] ,[2,5,8] // colums
        [0,4,8],[2,4,6] // diagonals
    ]

    for (let cond in pattern){
        const [ a , b , c] = cond;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
    }
    return null;
}
}

function handleCellClick(index){
    if ( winner || cells[index]) return ;
    cells[index] = currentPlayer;
    render();

    winner = checkWinner();

    if (winner){
        setTimeout(() => {
            alert(`Player ${winner} wins!`);
            resetGame();
          }, 100);
    
    } else if (!cells.includes(null)) {
    setTimeout(() => {
      alert("It's a tie!");
      resetGame();
    }, 100);}
    else{
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   
    }
}

function render(){
    board.innerHTML = '';
    cells.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.innerText = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cellElement);
    });
}

function resetGame() {
    cells.fill(null);
    currentPlayer = 'X';
    winner = null;
    render();
  }

render();



















