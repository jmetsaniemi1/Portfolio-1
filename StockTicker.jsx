import React, { useEffect, useState } from "react";
import "./StockTicker.css";

const API_KEY = "d0fgjvpr01qsv9ehddm0d0fgjvpr01qsv9ehddmg";
const SYMBOLS = [
  "AAPL", "MSFT", "GOOGL", "TSLA", "AMZN", // USA
  "NOKIA.HE", "KNEBV.HE", "FORTUM.HE", "STERV.HE", "UPM.HE", "OUT1V.HE" // Suomi
];

export default function StockTicker() {
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 5 * 60 * 1000); // 5 min välein
    return () => clearInterval(interval);
  }, []);

  async function fetchPrices() {
    const results = [];
    setError("");
    for (const symbol of SYMBOLS) {
      try {
        const res = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
        );
        const data = await res.json();
        // Finnhub palauttaa: c = current price
        if (data && typeof data.c === "number" && data.c > 0) {
          results.push({ symbol, price: data.c.toFixed(2) });
        }
      } catch (e) {
        // ignore
      }
    }
    setPrices(results);
    if (results.length === 0) {
      setError("Kurssitietoja ei saatavilla. Tarkista API-avain tai tunnukset.");
    }
  }

  return (
    <div className="stock-ticker-container">
      <div className="stock-ticker-marquee">
        {prices.length === 0 && error && (
          <span style={{ color: "#ff4444", fontWeight: "bold" }}>{error}</span>
        )}
        {prices.map((item) => (
          <span key={item.symbol} className="stock-ticker-item">
            {item.symbol}: ${item.price} &nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
