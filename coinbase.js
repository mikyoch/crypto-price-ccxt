const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

(async () => {
  setInterval(async() => {
    console.log((await publicClient.getProductTicker('eth-usd')).price);
  }, 500);
})();