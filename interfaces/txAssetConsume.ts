/**
 * The parameters for the txAssetConsume method.
 */
export interface TxAssetConsumeParams {
  /**
   * The amount of the asset to burn, in asset groths.
   */
  value: number;

  /**
   * The ID of the asset to consume.
   */
  asset_id: number;

  /**
   * The transaction fee in BEAM groths. Optional.
   */
  fee?: number;

  /**
   * Preselected specific UTXOs to burn and to pay fee. Optional.
   */
  coins?: string[];
}
