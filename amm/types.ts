export interface BaseSerializedObject {
  action: string;
  cid: string;
}

export interface ViewAllAssets {
  action: "view_all_assets";
}

export interface PoolsView {
  action: "pools_view";
}

export interface PoolView {
  action: "pool_view";
  aid1: number;
  aid2: number;
  kind: number;
}

export interface ViewDeployed {
  action: "view_deployed";
}

export interface PoolCreate {
  action: "pool_create";
  aid1: string;
  aid2: string;
  kind: string;
}

export interface PoolAddLiquidity {
  action: "pool_add_liquidity";
  aid1: string;
  aid2: string;
  kind: string;
  val1: string;
  val2: string;
  bPredictOnly: string;
}

export interface PoolTrade {
  action: "pool_trade";
  aid1: string;
  aid2: string;
  kind: string;
  val1_buy: string;
  bPredictOnly: string;
}

export interface PoolWithdraw {
  action: "pool_withdraw";
  aid1: string;
  aid2: string;
  kind: string;
  ctl: string;
  bPredictOnly: string;
}
