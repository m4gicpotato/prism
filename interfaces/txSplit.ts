/**
 * The parameters for the txSplit method.
 */
export interface TxSplitParams {
  /**
   * The amounts of coins you want to have after the split.
   */
  coins: number[];

  /**
   * The fee for the transaction, in BEAM groths. Optional.
   */
  fee?: number;

  /**
   * The ID of the asset to split. Optional. Omit or set to 0 to split BEAM coins.
   */
  asset_id?: number;
}
