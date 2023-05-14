/**
 * Parameters for the calcChange function.
 *
 * @property amount - The requested amount we are going to send.
 * @property asset_id - Optional asset id of the requested amount. Default is 0 (BEAM).
 * @property fee - Explicit fee in GROTHs chosen by the user.
 * @property is_push_transaction - True if we are going to push transaction output into the shielded pool.
 */
export interface CalcChangeParams {
  amount: number;
  asset_id?: number;
  fee: number;
  is_push_transaction: boolean;
}

/**
 * Result for the calcChange function.
 *
 * @property asset_change - Change amount for requested asset_id.
 * @property asset_change_str - String representation of change amount for requested asset_id.
 * @property change - Change for BEAM. asset_change and change are equal if asset_id == 0, i.e. BEAM.
 * @property change_str - String representation of change for BEAM.
 * @property explicit_fee - The fee which should be used.
 * @property explicit_fee_str - String representation of the fee which should be used.
 */
export interface CalcChangeResult {
  asset_change: number;
  asset_change_str: string;
  change: number;
  change_str: string;
  explicit_fee: number;
  explicit_fee_str: string;
}
