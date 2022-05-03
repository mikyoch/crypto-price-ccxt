// var indicators = require('trading-indicator').sma;

// (async() => {
//   let symbol = "BTC/USD";
//   let ticker = await indicators.ticker("binance", symbol, true)
//   console.log(ticker);
// })();
const ema = require('trading-indicator').ema;
(async() => {
  let emaData = await ema(8, "close", "binance", "BTC/USDT", "15m", true)
  console.log(emaData[emaData.length - 1])
})();