/**
 * The parameters for the addrList method.
 */
export interface AddrListParams {
  /**
   * A boolean indicating whether to return only own addresses.
   */
  own?: boolean;
}

/**
 * The address information.
 */
export interface AddressInfo {
  /**
   * The address that should be distributed among users and used to send funds to.
   */
  address: string;

  /**
   * Unsigned 64 bit index used to generate given address.
   */
  own_id: number;

  /**
   * String representation of index used to generate given address.
   */
  own_id_str: string;

  /**
   * Identity linked to the given address. In UI and CLI called as "wallet's signature".
   */
  identity: string;

  /**
   * Address type. Consult create_address method for detailed description.
   */
  type: string;

  /**
   * Wallet ID (SBBS address) associated with the given address.
   */
  wallet_id: string;

  // Add other fields as needed...
}
