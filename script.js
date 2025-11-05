const tickers = document.getElementById('tickers');
const data = [
  "BTC/USD: $67,520",
  "GOLD: $2,385",
  "EUR/USD: 1.08",
  "GBP/USD: 1.24",
  "USD/JPY: 151.2"
];

let i = 0;
setInterval(() => {
  tickers.innerHTML = `<span>${data[i % data.length]}</span>`;
  i++;
}, 2500);
