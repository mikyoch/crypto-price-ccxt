const ccxt = require("ccxt");

const pairs = [
  "XRP/USD",
  "DGB/USD",
  "BCH/USD",
  "ETH/USD",
  "ALGO/USD",
  "DOGE/USD",
  "ADA/USD",
  "BTC/USD",
  "LTC/USD",
  "XLM/USD",
  "FIL/USD",
  "SGB/USD",
];

const exchange_list = [
  // "binance",
  // // "binanceus",
  // "bitfinex",
  // "gemini",
  "huobi",
  // "bitstamp",
  // "coinbasepro",
  // "kraken",
  // "gateio",
  // "bittrex"
]

let exchanges = [];

const loadMarkets = async() => {
  for (source of exchange_list) {
    if (source == "kraken") {
      exchanges[source] = new ccxt[source]({
        apiKey: 'rK80EGv3jaBOI5pHIqvR5qESsngWGzi8LIagWLftyFVh6pHxNobyPdYJ',
        secret: 'hjj6d42ZmeuNO6dZdNg5PaoSaZ7aFJZU7X4DlZvfcJ1ZZWQV0VyVA3mzCanksyoTjTROT0cwh3Em8fqmKI2gAw==',
      });
    }
    else exchanges[source] = new ccxt[source]({ enableRateLimit: true });
    await exchanges[source].loadMarkets();
    console.log("--------- ", source, " ------------");
  }
  console.log(" *** All finished ***");
}

let prices = [];
const getPrices = async(source) => {
  console.log(`Getting prices from *${source}*...`);
  let ex = exchanges[source];
  for (pair of pairs) {
    const name = pair.slice(0, -4);
    if (ex.currencies.hasOwnProperty(name)) {
      if (source == "huobi" || source == "binance") pair += "T";
      try {
        const price = await ex.fetchTicker(pair);
        console.log(source, " => ", name, ": ", price.last);
        if (!prices[name]) prices[name] = [];
        prices[name].push({source : price});
      } catch (e) {}
    }
    else console.log(source, " => ", name, ": XXX");
  }
}

(async() => {
  await loadMarkets();
  for await (source of exchange_list) {
    await getPrices(source);
  }
})();
