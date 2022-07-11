import React, { useState } from 'react';
import { useEffect } from 'react';
import LineChart from './components/LineChart';
import './App.css';
import Time from './components/Time';

function App() {
  const [time, setTime] = useState('26');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const dots = {
    labels: items.slice(0, time).map(data => data.date),
    datasets: [
      {
        label: 'Day',
        data: items.map(data => data.high),
        backgroundColor: ['AliceBlue'],
        borderColor: 'DeepSkyBlue',
      },
    ],
  };
  useEffect(() => {
    fetch(
      'https://eodhistoricaldata.com/api/eod/MCD.US?from=2017-01-05&to=2017-02-10&period=d&fmt=json&api_token=demo'
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='App'>
        <h1>Stock Market Chart</h1>
        <br></br>
        <div>
          <Time time={time} setTime={setTime} />
        </div>
        <br></br>
        <br></br>
        <div style={{ width: 700 }}>
          <LineChart chartData={dots}/>
        </div>
      </div>
    );
  }
}
export default App;
