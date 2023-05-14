/**
 * @property {number[]} contract - Contract code as a raw byte array. Optional.
 * @property {string} contract_file - File name to read contract code from. Optional. Can be absolute or relative to the executable CWD.
 * @property {string} args - Contract arguments. Optional. Depends on the called shader.
 * @property {boolean} create_tx - Boolean to control the automatic creation of a transaction if the contract requires it. Optional. Default is true.
 * @property {number} priority - Integer for controlling the priority of the request in the queue. Optional. Default is 0.
 * @property {number} unique - Integer for ensuring the uniqueness of the request in the queue. Optional. Default is 0.
 */
export interface InvokeContractParams {
  contract?: number[];
  contract_file?: string;
  args?: string;
  create_tx?: boolean;
  priority?: number;
  unique?: number;
}

/**
 * @property {string} output - Output from the contract. Depends on the called shader. Can be empty.
 * @property {string} txid - Transaction ID created by the contract (if any).
 * @property {string} raw_data - Raw data returned by the contract. This can be used to create a transaction using process_invoke_data.
 */
export interface InvokeContractResponse {
  output: string;
  txid?: string;
  raw_data?: string;
}
