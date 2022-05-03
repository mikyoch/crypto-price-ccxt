const GateApi = require('gate-api');
const client = new GateApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new GateApi.SpotApi(client);
const opts = {
  'currencyPair': "XRP_USD" // string | Currency pair
};
(async() => {
let data = await api.listTickers(opts);
console.log(data.body[0].last);
})();