/**
 * Represents metadata pairs of an asset.
 * @interface MetadataPairs
 */
interface MetadataPairs {}

/**
 * Represents an asset.
 * @interface Asset
 * @property {number} asset_id - Unique identifier of the asset.
 * @property {string} emission_str - The emission string of the asset.
 * @property {number} isOwned - Indicates whether the asset is owned.
 * @property {number} lockHeight - The lock height of the asset.
 * @property {string} metadata - The metadata of the asset.
 * @property {boolean} metadata_kv - Indicates whether the metadata key value exists.
 * @property {MetadataPairs} metadata_pairs - The metadata pairs of the asset.
 * @property {boolean} metadata_std - Indicates whether the standard metadata exists.
 * @property {boolean} metadata_std_min - Indicates whether the minimum standard metadata exists.
 * @property {boolean} metadata_v50 - Indicates whether the v50 metadata exists.
 * @property {boolean} metadata_v60 - Indicates whether the v60 metadata exists.
 * @property {string} ownerId - The owner ID of the asset.
 * @property {number} refreshHeight - The refresh height of the asset.
 */
interface Asset {
  asset_id: number;
  emission_str: string;
  isOwned: number;
  lockHeight: number;
  metadata: string;
  metadata_kv: boolean;
  metadata_pairs: MetadataPairs;
  metadata_std: boolean;
  metadata_std_min: boolean;
  metadata_v50: boolean;
  metadata_v60: boolean;
  ownerId: string;
  refreshHeight: number;
}

/**
 * Represents the result of the `assets_list` method.
 * @interface AssetsListResult
 * @property {Asset[]} assets - The list of assets.
 */
export interface AssetsListResult {
  assets: Asset[];
}

/**
 * Parameters for listing assets.
 * @interface AssetsListParams
 * @property {boolean} refresh - Whether to refresh the locally stored info about assets.
 * @property {number} height - If refresh is true, return the list of assets registered up to this height.
 */
export interface AssetsListParams {
  refresh: boolean;
  height: number;
}
