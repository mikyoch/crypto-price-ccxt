const getCoinGeckoPrice = async () => {
  //1. Import coingecko-api
  const CoinGecko = require("coingecko-api");
  
  //2. Initiate the CoinGecko API Client
  const CoinGeckoClient = new CoinGecko();
  let data = await CoinGeckoClient.simple.price({
    ids: [
      "ripple",
      "litecoin",
      "stellar",
      "dogecoin",
      "cardano",
      "algorand",
      "bitcoin-cash",
      "digibyte",
      "bitcoin",
      "ethereum",
      "filecoin",
      "songbird",
    ],
    vs_currencies: ["usd"],
  });
  console.log(data);
};

getCoinGeckoPrice();
