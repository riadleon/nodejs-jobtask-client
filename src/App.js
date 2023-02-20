import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [outcome, setOutcome] = useState([]);
  const [rank, setRank] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3001/api/get-countries-tags');
      setOutcome(response.data.outcome);
      setRank(response.data.rank);
    }
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <tbody>
          {outcome.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((country, colIndex) => (
                <td key={colIndex}>{country}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Object.keys(rank).map((country, index) => (
          <div key={index}>
            {country}: {rank[country]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
