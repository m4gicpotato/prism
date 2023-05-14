/**
 * Parameters for the blockDetails function.
 *
 * @property height - Height of the block.
 */
export interface BlockDetailsParams {
  height: number;
}

/**
 * Result for the blockDetails function.
 *
 * @property block_hash - Block hash.
 * @property chainwork - Chainwork.
 * @property definition - Definition.
 * @property difficulty - Difficulty.
 * @property height - Block height.
 * @property kernels - Kernels.
 * @property packed_difficulty - Packed difficulty.
 * @property pow - Proof of work.
 * @property previous_block - Hash of the previous block.
 * @property rules_hash - Rules hash.
 * @property timestamp - Timestamp.
 */
export interface BlockDetailsResult {
  block_hash: string;
  chainwork: string;
  definition: string;
  difficulty: number;
  height: number;
  kernels: string;
  packed_difficulty: number;
  pow: string;
  previous_block: string;
  rules_hash: string;
  timestamp: number;
}
