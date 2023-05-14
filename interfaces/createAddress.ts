/**
 * The parameters for the createAddress method.
 */
export interface CreateAddressParams {
  /**
   * The type of address to create. Possible values are 'regular', 'offline',
   * 'max_privacy', 'public_offline' and 'regular_new'. Default is 'regular'.
   */
  type?:
    | "regular"
    | "offline"
    | "max_privacy"
    | "public_offline"
    | "regular_new";

  /**
   * The expiration setting for the address. Possible values are 'expired', 'never',
   * '24h', and 'auto'. Default is '24h'. 'auto' means the address expires in roughly 2 months
   * and is renewed for another 2 months when any transaction is received with this address.
   */
  expiration?: "expired" | "never" | "24h" | "auto";

  /**
   * An optional comment for the address.
   */
  comment?: string;

  /**
   * A flag indicating whether a new style base58 address should be returned.
   * If true, a new style base58 address will be returned, otherwise, a hexadecimal string
   * will be returned. This option is ignored for address types other than 'regular'.
   * Setting type='regular' and new_style_regular=true is equivalent to setting type='regular_new'.
   */
  new_style_regular?: boolean;

  /**
   * The number of offline payments embedded into an offline address. Default value is 1.
   * Valid only for the type='offline'.
   */
  offline_payments?: number;

  /**
   * If true, the generated address will use the default wallet signature. Default is false.
   */
  use_default_signature?: boolean;
}
