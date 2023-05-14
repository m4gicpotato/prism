/**
 * The parameters for the walletStatus method.
 */
export interface WalletStatusParams {
  /**
   * If true do not return totals for assets with zero balance. Optional.
   */
  nz_totals?: boolean;
}

/**
 * The structure for an asset in the wallet.
 *
 * @property {number} asset_id - The unique identifier of the asset.
 * @property {number} available - The sum of regular and max privacy UTXOs the wallet can spend.
 * @property {number} available_mp - Available max privacy (shielded) UTXOs the wallet can spend.
 * @property {string} available_mp_str - String representation of available max privacy (shielded) UTXOs.
 * @property {number} available_regular - Available regular UTXOs the wallet can spend.
 * @property {string} available_regular_str - String representation of available regular UTXOs.
 * @property {string} available_str - String representation of the total available UTXOs.
 * @property {number} change - Change that is currently incoming to the wallet.
 * @property {string} change_str - String representation of the change.
 * @property {number} locked - Locked UTXOs, the sum of maturing regular, maturing max privacy and change.
 * @property {string} locked_str - String representation of the locked UTXOs.
 * @property {number} maturing - The sum of maturing regular and maturing max privacy UTXOs.
 * @property {number} maturing_mp - Maturing max privacy (shielded) UTXOs.
 * @property {string} maturing_mp_str - String representation of maturing max privacy UTXOs.
 * @property {number} maturing_regular - Maturing regular UTXOs.
 * @property {string} maturing_regular_str - String representation of maturing regular UTXOs.
 * @property {string} maturing_str - String representation of the total maturing UTXOs.
 * @property {number} receiving - The sum of regular and max privacy UTXOs the wallet is currently receiving.
 * @property {number} receiving_mp - Max privacy (shielded) UTXOs the wallet is currently receiving.
 * @property {string} receiving_mp_str - String representation of receiving max privacy UTXOs.
 * @property {number} receiving_regular - Regular UTXOs the wallet is currently receiving.
 * @property {string} receiving_regular_str - String representation of receiving regular UTXOs.
 * @property {string} receiving_str - String representation of the total receiving UTXOs.
 * @property {number} sending - The sum of regular and max privacy UTXOs the wallet is currently sending.
 * @property {number} sending_mp - Max privacy (shielded) UTXOs the wallet is currently sending.
 * @property {string} sending_mp_str - String representation of sending max privacy UTXOs.
 * @property {number} sending_regular - Regular UTXOs the wallet is currently sending.
 * @property {string} sending_regular_str - String representation of sending regular UTXOs.
 * @property {string} sending_str - String representation of the total sending UTXOs.
 */
interface WalletAssetTotal {
  asset_id: number;
  available: number;
  available_mp: number;
  available_mp_str: string;
  available_regular: number;
  available_regular_str: string;
  available_str: string;
  change: number;
  change_str: string;
  locked: number;
  locked_str: string;
  maturing: number;
  maturing_mp: number;
  maturing_mp_str: string;
  maturing_regular: number;
  maturing_regular_str: string;
  maturing_str: string;
  receiving: number;
  receiving_mp: number;
  receiving_mp_str: string;
  receiving_regular: number;
  receiving_regular_str: string;
  receiving_str: string;
  sending: number;
  sending_mp: number;
  sending_mp_str: string;
  sending_regular: number;
  sending_regular_str: string;
  sending_str: string;
}

/**
 * The response from the walletStatus method.
 */
export interface WalletStatusResponse {
  current_height: number;
  current_state_hash: string;
  current_state_timestamp: number;
  prev_state_hash: string;
  is_in_sync: boolean;
  available: number;
  receiving: number;
  sending: number;
  maturing: number;
  difficulty: number;
  totals: WalletAssetTotal[];
}
