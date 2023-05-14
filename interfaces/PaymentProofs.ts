/**
 * Parameters for the exportPaymentProof function.
 *
 * @property txId - The id of the transaction to export payment proof for.
 */
export interface ExportPaymentProofParams {
  txId: string;
}

/**
 * Result for the exportPaymentProof function.
 *
 * @property payment_proof - A hex-encoded byte buffer which contains information about sender, receiver, amount and kernel, signed with receiver's private key.
 */
export interface ExportPaymentProofResult {
  payment_proof: string;
}

/**
 * Parameters for the verifyPaymentProof function.
 *
 * @property payment_proof - The payment proof to verify.
 */
export interface VerifyPaymentProofParams {
  payment_proof: string;
}

/**
 * Result for the verifyPaymentProof function.
 *
 * @property is_valid - A boolean indicating if the payment proof is valid.
 * @property sender - The sender's SBBS address.
 * @property receiver - The receiver's SBBS address.
 * @property amount - The amount sent by the transaction in groth.
 * @property asset_id - The asset id of the transaction, 0 for BEAM.
 * @property kernel - The id of the kernel of this transaction.
 */
export interface VerifyPaymentProofResult {
  is_valid: boolean;
  sender: string;
  receiver: string;
  amount: number;
  asset_id: number;
  kernel: string;
}
