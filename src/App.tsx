import { useState } from "react";

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(0));
  const [turno, setTurno] = useState('o');

  function Draw(index: number) {
    if (tablero[index] === '') {
      const newTablero = [...tablero];
      newTablero[index] = turno == 'o' ? 1 : 2;
      setTablero(newTablero);
      const newTurno = turno === 'o' ? 'x' : 'o';
      setTurno(newTurno);
    }
  }

  return (
    <>
      <h1>Tic tac toe</h1>
      <main className="tablero">
        {tablero.map((n: number, index: number) => (
          <div className="casilla" key={index} onClick={() => Draw(index)}>
            {
            n == 0 ? '' :
            n == 1 ? 'o':
            n == 2 ? 'x':
            null
            }
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
