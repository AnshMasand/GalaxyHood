import React, { useEffect, useState } from "react";
import "./ProfitLossHistory.css";

function ProfitLossHistory({ ticker }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Simulated fetch profit/loss history data
    const fetchProfitLossHistory = async () => {
      // Make an API call or fetch data from a database
      // Example: const response = await axios.get(`/api/profit-loss-history/${ticker}`);
      // Set the response data to the history state variable
      // setHistory(response.data);
      // For demo purposes, using a simulated data
      setHistory([
        { date: "2023-01-01", value: 1000 },
        { date: "2023-01-02", value: 1200 },
        { date: "2023-01-03", value: 900 },
        { date: "2023-01-04", value: 1100 },
        { date: "2023-01-05", value: 1300 },
        // Add more history data here
      ]);
    };

    fetchProfitLossHistory();
  }, [ticker]);

  return (
    <div className="profit-loss-history-container">
      <h2>Profit/Loss History</h2>
      <div className="profit-loss-history-chart">
        {/* Render profit/loss history chart */}
      </div>
    </div>
  );
  
}

export default ProfitLossHistory;