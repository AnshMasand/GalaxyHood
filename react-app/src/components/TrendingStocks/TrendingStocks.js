import React, { useEffect, useState } from "react";
import "./trendingstocks.css";


function TrendingStocks() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch the trending stocks from the IEX API
    const fetchTrendingStocks = async () => {
      try {
        const response = await fetch(
          "https://cloud.iexapis.com/stable/stock/market/list/gainers?token=YOUR_IEX_API_TOKEN"
        );
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error("Error fetching trending stocks:", error);
      }
    };

    fetchTrendingStocks();
  }, []);

  return (
    <div className="trending-stocks-container">
      <h2>Trending Stocks</h2>
      <ul className="trending-stocks-list">
        {stocks.map((stock) => (
          <li key={stock.symbol}>{stock.symbol}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingStocks;