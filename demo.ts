import { PrismClient } from "./main.ts";
import { BeamAMM, FeeSettings } from "./amm/index.ts";
import { sleep } from "./utils/sleep.ts";

async function setIntervalAsync(timeout: number, callback: () => Promise<void>) {
  await callback();
  await sleep(timeout);
  setIntervalAsync(timeout, callback);
}

// Step 1: Download and run Beam Node on port 10005
// Step 2: Download and run Beam Wallet API on port 10000
const WALLET_API_ENDPOINT = Deno.env.get("WALLET_API_ENDPOINT") ||
  "http://127.0.0.1:10000";
const client = new PrismClient(WALLET_API_ENDPOINT);

const dex = new BeamAMM(
  "./amm.wasm",
  "729fe098d9fd2b57705db1a05a74103dd4b891f535aef2ae69b47bcfdeef9cbf",
  client,
);

const cachedAssets = await dex.loadAssetsList();
console.log(`Cached ${cachedAssets.length} assets`);
console.log(cachedAssets)
//console.log(await dex.loadPoolsList());

/*await setIntervalAsync(3000, async () => {
  const block = await client.currentHeight();
  console.log(`Current height: ${block}`);
});*/

const poolToObserve = { aid1: 69, aid2: 0, kind: FeeSettings.HIGH_VOLATILITY };
const result = await dex.loadPoolList(poolToObserve);
console.log(
  result.res
);


/*console.log(
  JSON.stringify(
    await dex.loadPoolsList()
  )
)
*/
//console.log(JSON.stringify(await dex.viewDeployed()))
//console.log(JSON.stringify(await dex.loadAssetsList()))
