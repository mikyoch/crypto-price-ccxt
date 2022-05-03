const key          = 'rK80EGv3jaBOI5pHIqvR5qESsngWGzi8LIagWLftyFVh6pHxNobyPdYJ' // API Key
const secret       = 'hjj6d42ZmeuNO6dZdNg5PaoSaZ7aFJZU7X4DlZvfcJ1ZZWQV0VyVA3mzCanksyoTjTROT0cwh3Em8fqmKI2gAw==' // API Private Key
const KrakenClient = require('kraken-api');
const kraken       = new KrakenClient(key, secret);
 
(async () => {
    // Get Ticker Info
    
    console.log((await kraken.api('Ticker', { pair : 'ETH/USD' })).result['ETH/USD'].b[0]);
    console.log((await kraken.api('Ticker', { pair : 'BTC/USD' })).result['BTC/USD'].b[0]);
    console.log((await kraken.api('Ticker', { pair : 'DOGE/USD' })).result['DOGE/USD'].b[0]);
    console.log((await kraken.api('Ticker', { pair : 'ADA/USD' })).result['ADA/USD'].b[0]);
    console.log((await kraken.api('Ticker', { pair : 'LTC/USD' })).result['LTC/USD'].b[0]);
    console.log((await kraken.api('Ticker', { pair : 'FIL/USD' })).result['FIL/USD'].b[0])
    console.log((await kraken.api('Ticker', { pair : 'XLM/USD' })).result['XLM/USD'].b[0]);;
})();

// https://api.kraken.com/0/public/Ticker?pair=sgbusd