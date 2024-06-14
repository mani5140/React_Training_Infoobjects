import React, { useState } from 'react';

interface props {
  theme: boolean;
}

export default function PreservingState() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <div>
        <h1>Preserving State</h1>
      {theme ? (
        <Counter theme={true} /> 
      ) : (
        <Counter theme={false} /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={theme}
          onChange={e => {
            setTheme(e.target.checked);
          }}
        />
        Use LightBlue background
      </label>
    </div>
  );
}

function Counter({ theme }: props) {
  const [score, setScore] = useState<number>(0);

  let className = "";
  if (theme) {
    className += "lightblue";
  }

  return (
    <div
      style={{background: className}}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
