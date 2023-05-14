/**
 * Parameters for the processInvokeData function.
 *
 * @property data - The raw invoke data bytes array returned by invoke_contract.
 */
export interface ProcessInvokeDataParams {
  data: number[];
}

/**
 * Result for the processInvokeData function.
 *
 * @property txid - The contract transaction id created as a result of the call.
 */
export interface ProcessInvokeDataResult {
  txid: string;
}
