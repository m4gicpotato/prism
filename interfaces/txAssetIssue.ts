/**
 * The parameters for the txAssetIssue method.
 */
export interface TxAssetIssueParams {
  /**
   * The amount of the asset to mint, in asset groths.
   */
  value: number;

  /**
   * The ID of the asset to mint.
   */
  asset_id: number;

  /**
   * The transaction fee in BEAM groths. Optional.
   */
  fee?: number;

  /**
   * Preselected specific BEAM UTXOs for a transaction fee. Optional.
   */
  coins?: string[];
}
