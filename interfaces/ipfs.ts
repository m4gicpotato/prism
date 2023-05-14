/**
 * Result for the ipfs_add, ipfs_hash, ipfs_get, ipfs_pin, ipfs_unpin functions.
 *
 * @property hash - IPFS hash of the added, hashed, retrieved, pinned, or unpinned data.
 * @property pinned - Bool flag that indicates if data has been pinned or just added. Only used in ipfs_add.
 * @property data - Actual data as uint8 bytes array. Only used in ipfs_get.
 */
export interface IPFSResult {
  hash: string;
  pinned?: boolean;
  data?: number[];
}

/**
 * Result for the ipfs_gc function.
 *
 * @property result - Success flag.
 */
export interface IPFSGCResult {
  result: boolean;
}
