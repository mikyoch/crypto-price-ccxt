const axios = require("axios");

(async() => {
  let token = "XLM";
  let limit = 5;

  let priceKraken = [];
  let priceBitstamp = [];
  let priceBitfinex = [];
  let priceCoinbase = [];
  let sgbID = setInterval(async () => {
    let prices = (await axios.get("https://www.okx.com/api/v5/market/tickers?instType=SWAP")).data.data;
    for (let data of prices) {
      let instId = data.instId.split("-");
      if (instId[1] != "USD" || !tokens.includes(instId[0])) continue;
      if (instId[0] == "SGB" || instId[0] == "DGB") continue;
      console.log("okx price ", data.last);
      this.priceOkx[instId[0]].push(Number(data.last));
    }
  }, 1000);
})();