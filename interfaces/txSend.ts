/**
 * The parameters for the txSend method.
 */
export interface TxSendParams {
  /**
   * The amount of BEAM or asset to send, in groths.
   */
  value: number;

  /**
   * The fee for the transaction, in BEAM groths. Optional.
   */
  fee?: number;

  /**
   * The sender's own address. Optional. If omitted, a new own address is generated and registered.
   */
  from?: string;

  /**
   * The receiver's SBBS address or token.
   */
  address: string;

  /**
   * A comment for the transaction. Optional.
   */
  comment?: string;

  /**
   * The ID of the asset to send. Optional. Omit or set to 0 for a BEAM transaction.
   */
  asset_id?: number;

  /**
   * Whether to start an offline transaction. Optional. Applied only for offline addresses and ignored for all other address types.
   */
  offline?: boolean;

  /**
   * Specific UTXOs for a transaction and fee. Optional.
   */
  coins?: string[];
}
