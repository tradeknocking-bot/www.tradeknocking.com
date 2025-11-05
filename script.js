const btcTicker = document.getElementById("btcTicker");
const goldTicker = document.getElementById("goldTicker");
const forexTicker = document.getElementById("forexTicker");

setInterval(() => {
  btcTicker.textContent = `BTC/USD: $${67000 + Math.floor(Math.random() * 500 - 250)}`;
  goldTicker.textContent = `GOLD: $${2345 + Math.floor(Math.random() * 10 - 5)}`;
  forexTicker.textContent = `EUR/USD: ${(1.082 + (Math.random() * 0.002 - 0.001)).toFixed(3)}`;
}, 3000);
