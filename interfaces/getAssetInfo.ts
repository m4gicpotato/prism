/**
 * Parameters for the getAssetInfo function.
 *
 * @property asset_id - The asset id to retrieve info about. Can be used for any asset even if you don't own it.
 */
export interface GetAssetInfoParams {
  asset_id: number;
}

/**
 * The Asset Information.
 *
 * @property asset_id - The asset id.
 * @property emission - The total asset emission if it is less than or equal to Number.MAX_SAFE_INTEGER (2^53 - 1).
 * @property emission_str - The total asset emission in string format.
 * @property isOwned - A value of 1 indicates that you own this asset.
 * @property lockHeight - The last block when asset emission changed to/from 0.
 * @property refreshHeight - The block at which asset information has been received.
 * @property metadata - The asset metadata.
 * @property metadata_kv - A boolean indicating if the metadata was parsed successfully as key=value pairs.
 * @property metadata_pairs - The actual parsed key=value pairs. Present only if metadata_kv is true.
 * @property metadata_std_min - A boolean indicating if the metadata is k=v pairs and minimal necessary pairs are present, i.e. N(Name), UN(Unit Name), SN(Short Name), NTHUN (Smallest Unit Name).
 * @property metadata_std - A boolean indicating if the metadata is k=v pairs and fully adheres to the Asset Descriptor Specification.
 * @property ownerId - The owner's ID.
 */
export interface AssetInfo {
  asset_id: number;
  emission?: number;
  emission_str: string;
  isOwned: number;
  lockHeight: number;
  refreshHeight: number;
  metadata: string;
  metadata_kv: boolean;
  metadata_pairs?: {
    [key: string]: string;
  };
  metadata_std_min: boolean;
  metadata_std: boolean;
  ownerId: string;
}
