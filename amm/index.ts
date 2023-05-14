import { BeamContract } from "../contract.ts";
import { parseAssetMetadata } from "../utils/parseAssetMetadata.ts";
import {
  PoolAddLiquidity,
  PoolCreate,
  PoolsView,
  PoolTrade,
  PoolView,
  PoolWithdraw,
  ViewAllAssets,
  ViewDeployed,
} from "./types.ts";

// https://github.com/BeamMW/beam/blob/94c8deaaa76c0f81a986c25da9ff1ccbc41b6ac4/bvm/Shaders/amm/contract.h#L50
export enum FeeSettings {
  LOW_VOLATILITY = 0, // 0.05%
  MEDIUM_VOLATILITY = 1, // 0.3%
  HIGH_VOLATILITY = 2, // 1%
}

// https://github.com/BeamMW/beam/blob/7af0d255f53ec8cfcf17dbb36ecfecdc78995991/bvm/Shaders/amm/app.cpp

export class BeamAMM extends BeamContract<
  | ViewAllAssets
  | PoolsView
  | PoolView
  | ViewDeployed
  | PoolCreate
  | PoolAddLiquidity
  | PoolTrade
  | PoolWithdraw
> {
  async loadAssetsList() {
    const assets = await this.execute({
      action: "view_all_assets",
    });
    for (const asset in assets) {
      assets[asset] = {...assets[asset], ...parseAssetMetadata(assets[asset].metadata)}
      delete assets[asset].metadata
    }
    return assets
  }

  async loadPoolsList() {
    return await this.execute({
      action: "pools_view",
    });
  }

  async loadPoolList(pool: { aid1: number; aid2: number; kind: number }) {
    return await this.execute({
      action: "pool_view",
      ...pool,
    });
  }

  async viewDeployed() {
    return await this.execute({
      action: "view_deployed",
    });
  }

  // todo:
  // https://github.com/BeamMW/dex-app/blob/dappnet/src/app/core/api.tsx
}
