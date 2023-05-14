/**
 * The parameters for the txCancel, txDelete, and txStatus methods.
 */
export interface TxActionParams {
  /**
   * The ID of the transaction to interact with.
   */
  txId: string;
}

/**
 * The result of the txStatus method.
 */
export interface TxStatusResult {
  txId: string;
  asset_id: number;
  comment: string;
  fee: number;
  kernel: string;
  receiver: string;
  sender: string;
  status: number;
  status_string: string;
  tx_type: number;
  tx_type_string: string;
  failure_reason?: string;
  value: number;
  create_time: number;
  income: boolean;
  sender_identity: string;
  receiver_identity: string;
  token: string;
}

/**
 * TransactionRate Interface
 *
 * This interface defines the rate information for the transaction.
 *
 * @property {number} from - The asset id from which the conversion rate is being calculated. '0' denotes BEAM.
 * @property {number} rate - The conversion rate from the 'from' asset to the 'to' asset.
 * @property {string} rate_str - The string representation of the conversion rate.
 * @property {string} to - The target asset or currency for the conversion rate. Can be a third-party currency such as 'eth', 'btc', etc.
 */
export interface TransactionRate {
  from: number;
  rate: number;
  rate_str: string;
  to: string;
}

/**
 * TransactionData Interface
 *
 * This interface defines the details of a transaction.
 *
 * @property {number} asset_id - The id of the asset involved in the transaction. '0' denotes BEAM.
 * @property {string} txId - The unique identifier of the transaction.
 * @property {string} comment - A comment or note attached to the transaction.
 * @property {number} fee - The transaction fee in groths.
 * @property {string} kernel - The kernel of the transaction.
 * @property {string} receiver - The public address of the receiver of the transaction.
 * @property {string} sender - The public address of the sender of the transaction.
 * @property {number} status - The status of the transaction. Can have values like 'pending', 'in progress', 'completed', etc.
 * @property {string} status_string - The string representation of the status of the transaction.
 * @property {string} failure_reason - The reason for the failure of the transaction, if applicable.
 * @property {number} value - The value of the transaction in groths.
 * @property {number} create_time - The timestamp when the transaction was created.
 * @property {boolean} income - A flag indicating if the transaction is an income or not.
 * @property {string} token - The transaction token.
 * @property {TransactionRate[]} rates - An array of conversion rates applicable at the time of the transaction.
 */
export interface TransactionData {
  asset_id: number;
  txId: string;
  comment: string;
  fee: number;
  kernel: string;
  receiver: string;
  sender: string;
  status: number;
  status_string: string;
  failure_reason: string;
  value: number;
  create_time: number;
  income: boolean;
  token: string;
  rates: TransactionRate[];
}

/**
 * The parameters for the txListPrivate method.
 */
export interface TxListPrivateParams {
  /**
   * Filters applied to the transaction list.
   */
  filter: {
    /**
     * Filter transactions by status.
     */
    status: number;

    /**
     * Filter transactions by block height.
     */
    height: number;
  };

  /**
   * Number of transactions to skip.
   */
  skip: number;

  /**
   * Number of transactions to return.
   */
  count: number;
}

/**
 * The response from the txListPrivate method.
 */
export interface TxListPrivateResponse {
  transactions: TransactionData[];
}
