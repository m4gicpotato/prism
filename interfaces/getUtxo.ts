/**
 * Parameters for the getUtxo function.
 *
 * @property count - The number of UTXOs to retrieve. By default all the UTXOs are returned.
 * @property skip - The number of UTXOs to skip. Default is 0.
 * @property sort - Object containing the field to sort by and the direction of the sort.
 * @property assets - Whether or not to include asset coins. By default only BEAM coins are returned.
 * @property filter - Object containing the asset id to filter by.
 */
export interface GetUtxoParams {
  count?: number;
  skip?: number;
  sort?: {
    /**
     * Field to sort by. Available values are 'id', 'asset_id', 'amount', 'type', 'maturity', 'createTxId', 'spentTxId', 'status', 'status_string'
     */
    field:
      | "id"
      | "asset_id"
      | "amount"
      | "type"
      | "maturity"
      | "createTxId"
      | "spentTxId"
      | "status"
      | "status_string";

    /**
     * Direction of the sort. Available values are 'asc' or 'desc'
     */
    direction: "asc" | "desc";
  };
  assets?: boolean;
  filter?: {
    /**
     * Asset id to filter by. Returns only asset coins with the given asset id, 0 for BEAM coins.
     */
    asset_id: number;
  };
}

/**
 * An Unspent Transaction Output (UTXO).
 *
 * @property id - The id of the UTXO.
 * @property asset_id - The asset id if the coin belongs to an asset, and 0 for BEAM coins.
 * @property amount - The amount of the UTXO.
 * @property maturity - The maturity of the UTXO.
 * @property type - The type of the UTXO. Can be 'fees', 'mine', 'norm', 'chng', 'shld'.
 * @property createTxId - The id of the transaction that created the UTXO.
 * @property spentTxId - The id of the transaction that spent the UTXO.
 * @property status - The status of the UTXO. Can be 0 (unavailable), 1 (available), 2 (maturing), 3 (outgoing), 4 (incoming), 6 (spent), 7 (consumed).
 * @property status_string - The string representation of the status.
 */
export interface Utxo {
  id: number;
  asset_id: number;
  amount: number;
  maturity: number;
  type: "fees" | "mine" | "norm" | "chng" | "shld";
  createTxId: string;
  spentTxId: string;
  status: number;
  status_string:
    | "unavailable"
    | "available"
    | "maturing"
    | "outgoing"
    | "incoming"
    | "spent"
    | "consumed";
}
