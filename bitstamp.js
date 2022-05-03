var Bitstamp = require('bitstamp');
var bitstamp = new Bitstamp();

const func = async() => {
  let data;
  data = await bitstamp.ticker('algousd', function(err, trades) {
    data = trades;
    return data;
  });
  return data;
};

(async() => {
  console.log(await func());
})();

// https://www.bitstamp.net/api/v2/ticker/sgbusd