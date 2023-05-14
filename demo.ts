import { PrismClient } from "./main.ts";
import { BeamAMM } from "./amm/index.ts";

// Step 1: Download and run Beam Node on port 10005
// Step 2: Download and run Beam Wallet API on port 10000
const WALLET_API_ENDPOINT = Deno.env.get("WALLET_API_ENDPOINT") ||
  "http://127.0.0.1:10000";
const client = new PrismClient(WALLET_API_ENDPOINT);

const { current_height } = await client.walletStatus();
console.log(`Current height: ${current_height}`);

const dex = new BeamAMM(
  "./amm.wasm",
  "729fe098d9fd2b57705db1a05a74103dd4b891f535aef2ae69b47bcfdeef9cbf",
  client,
);
console.log(JSON.stringify(await dex.loadAssetsList()));

/*console.log(
  JSON.stringify(
    await dex.loadPoolsList()
  )
)
console.log(
  JSON.stringify(
    await dex.loadPoolList({aid1: '69', aid2: '0', kind: '2'})
  )
)*/
//console.log(JSON.stringify(await dex.viewDeployed()))
//console.log(JSON.stringify(await dex.loadAssetsList()))
