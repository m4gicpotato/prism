/**
 * Asset swap offer interface
 *
 * @interface AssetSwapOffer
 * @property {number} create_time - Offer creation time.
 * @property {number} expire_time - Offer expiration time.
 * @property {string} id - Identifier of the offer.
 * @property {boolean} isMy - Whether the offer is created by the user.
 * @property {number} receiveAmount - Amount to be received.
 * @property {number} receiveAssetId - Asset ID to be received.
 * @property {string} receiveCurrencyName - Name of the currency to be received.
 * @property {number} sendAmount - Amount to be sent.
 * @property {number} sendAssetId - Asset ID to be sent.
 * @property {string} sendCurrencyName - Name of the currency to be sent.
 */
export interface AssetSwapOffer {
  create_time: number;
  expire_time: number;
  id: string;
  isMy: boolean;
  receiveAmount: number;
  receiveAssetId: number;
  receiveCurrencyName: string;
  sendAmount: number;
  sendAssetId: number;
  sendCurrencyName: string;
}

/**
 * Parameters for creating an asset swap offer.
 * @interface AssetSwapCreateParams
 * @property {number} send_amount - Amount of asset to send.
 * @property {number} send_asset_id - ID of the asset to send.
 * @property {number} receive_amount - Amount of asset to receive.
 * @property {number} receive_asset_id - ID of the asset to receive.
 * @property {number} minutes_before_expire - Duration before the offer expires, in minutes.
 * @property {string} comment - Optional comment for the offer.
 */
export interface AssetSwapCreateParams {
  send_amount: number;
  send_asset_id: number;
  receive_amount: number;
  receive_asset_id: number;
  minutes_before_expire: number;
  comment: string;
}
