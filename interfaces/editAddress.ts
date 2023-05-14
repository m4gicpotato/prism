/**
 * The parameters for the editAddress method.
 */
export interface EditAddressParams {
  /**
   * The address to be edited.
   */
  address: string;

  /**
   * The comment to be associated with the address.
   */
  comment?: string;

  /**
   * The expiration status of the address.
   */
  expiration?: string;
}
