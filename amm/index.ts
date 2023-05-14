import { BeamContract } from "../contract.ts";
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
    return await this.execute({
      action: "view_all_assets",
    });
  }

  async loadPoolsList() {
    return await this.execute({
      action: "pools_view",
    });
  }

  async loadPoolList(pool: { aid1: string; aid2: string; kind: string }) {
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
