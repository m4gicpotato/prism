/**
 * The parameters for the validateAddress method.
 */
export interface ValidateAddressParams {
  /**
   * The address to validate.
   */
  address: string;
}

/**
 * The result of the validateAddress method.
 */
export interface ValidateAddressResult {
  /**
   * A boolean indicating whether the address is valid.
   */
  is_valid: boolean;

  /**
   * A boolean indicating whether the address belongs to the local wallet.
   */
  is_mine: boolean;

  /**
   * The type of the address. See create_address method for possible values.
   */
  type:
    | "regular"
    | "offline"
    | "max_privacy"
    | "public_offline"
    | "regular_new";

  /**
   * The number of offline payments left for the offline address.
   */
  payments: number;
}
