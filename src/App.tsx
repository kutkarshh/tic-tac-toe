import { useState } from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const handleBlockClick = (index: number) => {
    const stateCopy = [...state];
    if (stateCopy[index] !== null || winner) return;
    stateCopy[index] = currentTurn;

    const checkForWinner = checkWinner(stateCopy);
    if (checkForWinner) {
      setState(stateCopy);
      setWinner(checkForWinner);
      setTimeout(() => {
        alert(`The winner is ${checkForWinner}`);
        setState(Array(9).fill(null));
        setWinner(null);
      }, 200); // Delay of 0.2 seconds (200 milliseconds)
      return;
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  }

  return (
    <div className="container">
      <div className="board-container">
        <h2 className="info">{currentTurn}'s Turn</h2>
        <div className="board">
          <label className="title">Tic-Tac-Toe</label>
          <div className='row'>
            <Block onClick={() => handleBlockClick(0)} value={state[0]} />
            <Block onClick={() => handleBlockClick(1)} value={state[1]} />
            <Block onClick={() => handleBlockClick(2)} value={state[2]} />
          </div>
          <div className='row'>
            <Block onClick={() => handleBlockClick(3)} value={state[3]} />
            <Block onClick={() => handleBlockClick(4)} value={state[4]} />
            <Block onClick={() => handleBlockClick(5)} value={state[5]} />
          </div>
          <div className='row'>
            <Block onClick={() => handleBlockClick(6)} value={state[6]} />
            <Block onClick={() => handleBlockClick(7)} value={state[7]} />
            <Block onClick={() => handleBlockClick(8)} value={state[8]} />
          </div>
        </div>
        <h2 className="info">{winner ? `${winner} is Winner!!` : ' '}</h2>
      </div>
    </div>
  );
}

export default App;