const { PublicClient } = require('@okfe/okex-node');
const { V3WebsocketClient } = require('@okfe/okex-node');
const { AuthenticatedClient } = require('@okfe/okex-node');
const pClient = new PublicClient();
const wss = new V3WebsocketClient();

(async() => {
  console.log(await pClient.spot().getSpotBook('BTC-USDT', {'size':'10'}));
})();