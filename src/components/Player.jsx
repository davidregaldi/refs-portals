import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, SetEnteredPlayerName] = useState(null);

  function handleClick() {
    SetEnteredPlayerName(playerName.current.value = playerName.current.value.trim());
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || 'Unknown Entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          onClick={() => { playerName.current.value = ''; }}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
