import React from 'react';

function Time({ time, setTime }) {
  let getTime1 = () => {
    setTime((time = 5));
  };

  const getTime2 = () => {
    setTime((time = 18));
  };

  const getTime3 = () => {
    setTime((time = 26));
  };

  return (
    <div style={userStyle}>
      <button onClick={getTime1}>1 w</button>
      <button onClick={getTime2}>1 m</button>
      <button onClick={getTime3}>all</button>
    </div>
  );
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Time;
