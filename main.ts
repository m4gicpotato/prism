import { RpcClient } from "./clients/http-rpc.ts";
import { AddressInfo, AddrListParams } from "./interfaces/addrList.ts";
import { CreateAddressParams } from "./interfaces/createAddress.ts";
import {
  ValidateAddressParams,
  ValidateAddressResult,
} from "./interfaces/validateAddress.ts";
import { DeleteAddressParams } from "./interfaces/deleteAddress.ts";
import { EditAddressParams } from "./interfaces/editAddress.ts";
import { TxSendParams } from "./interfaces/txSend.ts";
import { TxSplitParams } from "./interfaces/txSplit.ts";
import { TxAssetIssueParams } from "./interfaces/txAssetIssue.ts";
import { TxAssetConsumeParams } from "./interfaces/txAssetConsume.ts";
import { TxAssetInfoParams } from "./interfaces/txAssetInfo.ts";
import {
  TransactionData,
  TxActionParams,
  TxListPrivateParams,
  TxListPrivateResponse,
  TxStatusResult,
} from "./interfaces/txCommons.ts";
import {
  WalletStatusParams,
  WalletStatusResponse,
} from "./interfaces/wallet.ts";
import {
  InvokeContractParams,
  InvokeContractResponse,
} from "./interfaces/invokeContract.ts";
import { GetUtxoParams, Utxo } from "./interfaces/getUtxo.ts";
import { AssetInfo, GetAssetInfoParams } from "./interfaces/getAssetInfo.ts";
import { GenerateTxIdResult } from "./interfaces/generateTxId.ts";
import {
  ExportPaymentProofParams,
  ExportPaymentProofResult,
  VerifyPaymentProofParams,
  VerifyPaymentProofResult,
} from "./interfaces/PaymentProofs.ts";
import {
  ProcessInvokeDataParams,
  ProcessInvokeDataResult,
} from "./interfaces/processInvokeData.ts";
import { CalcChangeParams, CalcChangeResult } from "./interfaces/calcChange.ts";
import {
  BlockDetailsParams,
  BlockDetailsResult,
} from "./interfaces/blockDetails.ts";
import { GetVersionResult } from "./interfaces/getVersion.ts";
import { IPFSGCResult, IPFSResult } from "./interfaces/ipfs.ts";
import {
  AssetSwapCreateParams,
  AssetSwapOffer,
} from "./interfaces/assetSwap.ts";
import { AssetsListParams, AssetsListResult } from "./interfaces/assetList.ts";
import { DeriveIdResult } from "./interfaces/deriveId.ts";

// todo: Can extend other kind of client like WASM?

export class PrismClient extends RpcClient {
  // Version of the API
  public static API_VERSION = "7.3";

  /**
   * Creates a new receiver address.
   *
   * @param params - The parameters for creating the address.
   * @returns A Promise that resolves to the created address.
   * @throws Will throw an error if the API request fails.
   */
  async createAddress(params: CreateAddressParams): Promise<string> {
    return await this.rpcRequest<CreateAddressParams, string>(
      "create_address",
      params,
    );
  }

  /**
   * Validates an address.
   *
   * @param params - The parameters for validating the address.
   * @returns A Promise that resolves to the validation result.
   * @throws Will throw an error if the API request fails.
   */
  async validateAddress(
    params: ValidateAddressParams,
  ): Promise<ValidateAddressResult> {
    return await this.rpcRequest<ValidateAddressParams, ValidateAddressResult>(
      "validate_address",
      params,
    );
  }

  /**
   * Retrieves a list of addresses stored in the wallet database.
   *
   * @param params - The parameters for retrieving the address list.
   * @returns A Promise that resolves to a list of addresses.
   * @throws Will throw an error if the API request fails.
   */
  async addrList(params: AddrListParams): Promise<AddressInfo[]> {
    return await this.rpcRequest<AddrListParams, AddressInfo[]>(
      "addr_list",
      params,
    );
  }

  /**
   * Deletes a specific address from the wallet.
   *
   * @param params - The parameters for deleting the address.
   * @returns A Promise that resolves when the address is successfully deleted.
   * @throws Will throw an error if the API request fails.
   */
  async deleteAddress(params: DeleteAddressParams): Promise<string> {
    return await this.rpcRequest<DeleteAddressParams, string>(
      "delete_address",
      params,
    );
  }

  /**
   * Edits a specific address in the wallet.
   *
   * @param params - The parameters for editing the address.
   * @returns A Promise that resolves when the address is successfully edited.
   * @throws Will throw an error if the API request fails.
   */
  async editAddress(params: EditAddressParams): Promise<string> {
    return await this.rpcRequest<EditAddressParams, string>(
      "edit_address",
      params,
    );
  }

  /**
   * Sends BEAM or an asset to a given address.
   *
   * @param params - The parameters for the transaction.
   * @returns A Promise that resolves with the transaction ID.
   * @throws Will throw an error if the API request fails.
   */
  async txSend(params: TxSendParams): Promise<string> {
    const response = await this.rpcRequest<TxSendParams, { txId: string }>(
      "tx_send",
      params,
    );
    return response.txId;
  }

  /**
   * Creates a specific set of outputs with given values.
   *
   * @param params - The parameters for the split transaction.
   * @returns A Promise that resolves with the transaction ID.
   * @throws Will throw an error if the API request fails.
   */
  async txSplit(params: TxSplitParams): Promise<string> {
    const response = await this.rpcRequest<TxSplitParams, { txId: string }>(
      "tx_split",
      params,
    );
    return response.txId;
  }

  /**
   * Mints new asset coins. You must own the asset and the info about the asset should be in a local database.
   *
   * @param params - The parameters for the asset issue transaction.
   * @returns A Promise that resolves with the transaction ID.
   * @throws Will throw an error if the API request fails.
   */
  async txAssetIssue(params: TxAssetIssueParams): Promise<string> {
    const response = await this.rpcRequest<
      TxAssetIssueParams,
      { txId: string }
    >("tx_asset_issue", params);
    return response.txId;
  }

  /**
   * Burns existing asset coins. You must own the asset itself as well as asset coins to burn them.
   *
   * @param params - The parameters for the asset consume transaction.
   * @returns A Promise that resolves with the transaction ID.
   * @throws Will throw an error if the API request fails.
   */
  async txAssetConsume(params: TxAssetConsumeParams): Promise<string> {
    const response = await this.rpcRequest<
      TxAssetConsumeParams,
      { txId: string }
    >("tx_asset_consume", params);
    return response.txId;
  }

  /**
   * Retrieve full info about any registered asset and save in a local database.
   *
   * @param params - The parameters for retrieving asset info.
   * @returns A Promise that resolves with the transaction ID.
   * @throws Will throw an error if the API request fails.
   */
  async txAssetInfo(params: TxAssetInfoParams): Promise<string> {
    const response = await this.rpcRequest<TxAssetInfoParams, { txId: string }>(
      "tx_asset_info",
      params,
    );
    return response.txId;
  }

  /**
   * Cancels a running transaction.
   *
   * @param params - The parameters for cancelling a transaction.
   * @returns A Promise that resolves with a boolean indicating if the operation was successful.
   * @throws Will throw an error if the API request fails.
   */
  async txCancel(params: TxActionParams): Promise<boolean> {
    const response = await this.rpcRequest<TxActionParams, { result: boolean }>(
      "tx_cancel",
      params,
    );
    return response.result;
  }

  /**
   * Removes a transaction from the local history.
   *
   * @param params - The parameters for deleting a transaction.
   * @returns A Promise that resolves with a boolean indicating if the operation was successful.
   * @throws Will throw an error if the API request fails.
   */
  async txDelete(params: TxActionParams): Promise<boolean> {
    const response = await this.rpcRequest<TxActionParams, { result: boolean }>(
      "tx_delete",
      params,
    );
    return response.result;
  }

  /**
   * Get status & extended information about a single transaction by its transaction id.
   *
   * @param params - The parameters for retrieving transaction status.
   * @returns A Promise that resolves with the transaction status information.
   * @throws Will throw an error if the API request fails.
   */
  async txStatus(params: TxActionParams): Promise<TxStatusResult> {
    return await this.rpcRequest<TxActionParams, TxStatusResult>(
      "tx_status",
      params,
    );
  }

  /**
   * Gets a list of private transactions.
   *
   * @param params - The parameters for fetching the private transaction list.
   * @returns A Promise that resolves with the list of private transactions.
   * @throws Will throw an error if the API request fails.
   */
  async txListPrivate(params: TxListPrivateParams): Promise<TransactionData[]> {
    const response = await this.rpcRequest<
      TxListPrivateParams,
      TxListPrivateResponse
    >("tx_list_private", params);
    return response.transactions;
  }

  /**
   * Gets the current wallet status.
   *
   * @param params - The parameters for the wallet status.
   * @returns A Promise that resolves with the wallet status.
   * @throws Will throw an error if the API request fails.
   */
  async walletStatus(
    params?: WalletStatusParams,
  ): Promise<WalletStatusResponse> {
    return await this.rpcRequest<WalletStatusParams, WalletStatusResponse>(
      "wallet_status",
      params ? params : {},
    );
  }

  /**
   * Retrieves a list of all unlocked UTXOs.
   *
   * @param params - The parameters for retrieving the UTXO list.
   * @returns A Promise that resolves to a list of UTXOs.
   * @throws Will throw an error if the API request fails.
   */
  async getUtxo(params: GetUtxoParams): Promise<Utxo[]> {
    return await this.rpcRequest<GetUtxoParams, Utxo[]>("get_utxo", params);
  }

  /**
   * Retrieves the information about a specific asset from the local database.
   *
   * @param params - The parameters for retrieving the asset info.
   * @returns A Promise that resolves to the asset info.
   * @throws Will throw an error if the API request fails.
   */
  async getAssetInfo(params: GetAssetInfoParams): Promise<AssetInfo> {
    return await this.rpcRequest<GetAssetInfoParams, AssetInfo>(
      "get_asset_info",
      params,
    );
  }

  /**
   * Generates an ID for a transaction.
   *
   * @returns A Promise that resolves to the generated transaction id.
   * @throws Will throw an error if the API request fails.
   */
  async generateTxId(): Promise<GenerateTxIdResult> {
    return await this.rpcRequest<null, GenerateTxIdResult>(
      "generate_tx_id",
      null,
    );
  }

  /**
   * Exports a payment proof for a given transaction id.
   *
   * @param params - The parameters for exporting the payment proof.
   * @returns A Promise that resolves to the payment proof.
   * @throws Will throw an error if the API request fails.
   */
  async exportPaymentProof(
    params: ExportPaymentProofParams,
  ): Promise<ExportPaymentProofResult> {
    return await this.rpcRequest<
      ExportPaymentProofParams,
      ExportPaymentProofResult
    >("export_payment_proof", params);
  }

  /**
   * Verifies a payment proof.
   *
   * @param params - The parameters for verifying the payment proof.
   * @returns A Promise that resolves to the verification result.
   * @throws Will throw an error if the API request fails.
   */
  async verifyPaymentProof(
    params: VerifyPaymentProofParams,
  ): Promise<VerifyPaymentProofResult> {
    return await this.rpcRequest<
      VerifyPaymentProofParams,
      VerifyPaymentProofResult
    >("verify_payment_proof", params);
  }

  /**
   * Invokes an application shader. Only application/wallet side shaders are accepted.
   *
   * @param params - The parameters for invoking the contract.
   * @returns A Promise that resolves to the contract output.
   * @throws Will throw an error if the API request fails.
   */
  async invokeContract(
    params: InvokeContractParams,
  ): Promise<InvokeContractResponse> {
    return await this.rpcRequest<InvokeContractParams, InvokeContractResponse>(
      "invoke_contract",
      params,
    );
  }

  /**
   * Creates a transaction requested by a contract.
   *
   * @param params - The parameters for creating the transaction.
   * @returns A Promise that resolves to the transaction id.
   * @throws Will throw an error if the API request fails.
   */
  async processInvokeData(
    params: ProcessInvokeDataParams,
  ): Promise<ProcessInvokeDataResult> {
    return await this.rpcRequest<
      ProcessInvokeDataParams,
      ProcessInvokeDataResult
    >("process_invoke_data", params);
  }

  /**
   * Calculates change for given amount.
   *
   * @param params - The parameters for calculating the change.
   * @returns A Promise that resolves to the change details.
   * @throws Will throw an error if the API request fails.
   */
  async calcChange(params: CalcChangeParams): Promise<CalcChangeResult> {
    return await this.rpcRequest<CalcChangeParams, CalcChangeResult>(
      "calc_change",
      params,
    );
  }

  /**
   * Returns block header from blockchain.
   *
   * @param params - The parameters for getting the block details.
   * @returns A Promise that resolves to the block details.
   * @throws Will throw an error if the API request fails.
   */
  async blockDetails(params: BlockDetailsParams): Promise<BlockDetailsResult> {
    return await this.rpcRequest<BlockDetailsParams, BlockDetailsResult>(
      "block_details",
      params,
    );
  }

  /**
   * Returns version info.
   *
   * @returns A Promise that resolves to the version info.
   * @throws Will throw an error if the API request fails.
   */
  async getVersion(): Promise<GetVersionResult> {
    return await this.rpcRequest<{}, GetVersionResult>("get_version");
  }

  /**
   * Adds data to IPFS local node and pins it. The action is automatically cancelled on API restart.
   *
   * @param data - The raw uint8 bytes array to store in IPFS.
   * @param pin - Optional bool, if true data would also be pinned to the local IPFS node. Default is true.
   * @param timeout - Optional timeout in milliseconds. By default method doesn't timeout.
   *
   * @returns A Promise that resolves to the IPFS result.
   * @throws Will throw an error if the API request fails.
   */
  async ipfsAdd(data: number[], pin = true, timeout = 0): Promise<IPFSResult> {
    return await this.rpcRequest<
      { data: number[]; pin: boolean; timeout: number },
      IPFSResult
    >("ipfs_add", { data, pin, timeout });
  }

  /**
   * Calculates IPFS hash (CID) of the data.
   *
   * @param data - The raw uint8 bytes array to calculate hash of.
   * @param timeout - Optional timeout in milliseconds. By default method doesn't timeout.
   *
   * @returns A Promise that resolves to the IPFS result.
   * @throws Will throw an error if the API request fails.
   */
  async ipfsHash(data: number[], timeout = 0): Promise<IPFSResult> {
    return await this.rpcRequest<
      { data: number[]; timeout: number },
      IPFSResult
    >("ipfs_hash", { data, timeout });
  }

  /**
   * Gets data from IPFS by hash. The action is automatically cancelled on API restart.
   *
   * @param hash - The IPFS hash of the data to get.
   * @param timeout - Optional timeout in milliseconds. By default method doesn't timeout.
   *
   * @returns A Promise that resolves to the IPFS result.
   * @throws Will throw an error if the API request fails.
   */
  async ipfsGet(hash: string, timeout = 0): Promise<IPFSResult> {
    return await this.rpcRequest<{ hash: string; timeout: number }, IPFSResult>(
      "ipfs_get",
      { hash, timeout },
    );
  }

  /**
   * Pins data to the local node. If data is not stored in the local node it is discovered and downloaded (ipfs_get).
   * The action is automatically cancelled at API restart.
   *
   * @param hash - The IPFS hash of the data to pin.
   * @param timeout - Optional timeout in milliseconds. By default method doesn't timeout.
   *
   * @returns A Promise that resolves to the IPFS result.
   * @throws Will throw an error if the API request fails.
   */
  async ipfsPin(hash: string, timeout = 0): Promise<IPFSResult> {
    return await this.rpcRequest<{ hash: string; timeout: number }, IPFSResult>(
      "ipfs_pin",
      { hash, timeout },
    );
  }

  /**
   * Unpins data from the local node. Data is not deleted and will be available via ipfs_get until garbage collected.
   *
   * @param hash - The IPFS hash of the data to unpin.
   *
   * @returns A Promise that resolves to the IPFS result.
   * @throws Will throw an error if the API request fails.
   */
  async ipfsUnpin(hash: string): Promise<IPFSResult> {
    return await this.rpcRequest<{ hash: string }, IPFSResult>("ipfs_unpin", {
      hash,
    });
  }

  /**
   * Garbage collects IPFS storage, i.e. deletes unpinned data until storage has at least 10% of free space.
   * In the desktop client, gc is run automatically every hour.
   *
   * @param timeout - Optional timeout in milliseconds. By default method doesn't timeout.
   *
   * @returns A Promise that resolves to the success flag.
   * @throws Will throw an error if the API request fails.
   */
  async ipfsGc(timeout = 0): Promise<IPFSGCResult> {
    return await this.rpcRequest<{ timeout: number }, IPFSGCResult>("ipfs_gc", {
      timeout,
    });
  }

  /**
   * Generates Schnorr signature for a custom message with public key generated from the given key material.
   *
   * @param {string} message - User message to sign.
   * @param {string} key_material - Hex encoded key material for key generation. It could be retrieved from application shader.
   * @returns A Promise that resolves to the signature of the message.
   * @throws Will throw an error if the API request fails.
   */
  async signMessage(
    message: string,
    key_material: string,
  ): Promise<{ signature: string }> {
    return await this.rpcRequest<
      { message: string; key_material: string },
      { signature: string }
    >("sign_message", { message, key_material });
  }

  /**
   * Verifies Schnorr signature for a custom message.
   *
   * @param {string} message - User message to sign.
   * @param {string} public_key - 33 byte hex encoded public key.
   * @param {string} signature - 65 byte hex encode signature.
   * @returns A Promise that resolves to the verification result.
   * @throws Will throw an error if the API request fails.
   */
  async verifySignature(
    message: string,
    public_key: string,
    signature: string,
  ): Promise<boolean> {
    return await this.rpcRequest<
      { message: string; public_key: string; signature: string },
      boolean
    >("verify_signature", { message, public_key, signature });
  }

  /**
   * Derives per-seed, per-app (if called from DApp), per-tag unique ID for DApps use.
   *
   * @param {string} tag - Arbitrary string, cannot be empty. Every dapp would have different ID even with the same tag.
   * @returns A Promise that resolves to the derived ID.
   * @throws Will throw an error if the API request fails.
   */
  async deriveId(tag: string): Promise<DeriveIdResult> {
    return await this.rpcRequest<{ tag: string }, DeriveIdResult>("derive_id", {
      tag,
    });
  }

  /**
   * Get all asset swap offers.
   *
   * @returns A Promise that resolves to the list of all asset swap offers.
   * @throws Will throw an error if the API request fails.
   */
  async assetsSwapOffersList(): Promise<AssetSwapOffer[]> {
    return await this.rpcRequest<{}, AssetSwapOffer[]>(
      "assets_swap_offers_list",
    );
  }

  /**
   * Create asset swap offer.
   *
   * @param {number} send_amount - Amount to be sent.
   * @param {number} send_asset_id - Asset ID to be sent.
   * @param {number} receive_amount - Amount to be received.
   * @param {number} receive_asset_id - Asset ID to be received.
   * @param {number} minutes_before_expire - Time before the offer expires, in minutes.
   * @param {string} comment - Comment on the offer.
   * @returns A Promise that resolves to the newly created asset swap offer.
   * @throws Will throw an error if the API request fails.
   */
  async assetsSwapCreate(
    params: AssetSwapCreateParams,
  ): Promise<AssetSwapOffer> {
    return await this.rpcRequest<AssetSwapCreateParams, AssetSwapOffer>(
      "assets_swap_create",
      params,
    );
  }

  /**
   * Cancel own asset swap offer.
   *
   * @param {string} offer_id - Identifier of the offer.
   * @returns A Promise that resolves to the id of the cancelled offer.
   * @throws Will throw an error if the API request fails.
   */
  async assetsSwapCancel(offer_id: string): Promise<string> {
    return await this.rpcRequest<{ offer_id: string }, string>(
      "assets_swap_cancel",
      { offer_id },
    );
  }

  /**
   * Accept asset swap offer.
   *
   * @param {string} offer_id - Identifier of the offer.
   * @returns A Promise that resolves to the accepted offer and the transaction id.
   * @throws Will throw an error if the API request fails.
   */
  async assetsSwapAccept(
    offer_id: string,
  ): Promise<{ offer: AssetSwapOffer; tx_id: string }> {
    return await this.rpcRequest<
      { offer_id: string },
      { offer: AssetSwapOffer; tx_id: string }
    >("assets_swap_accept", { offer_id });
  }

  /**
   * Get the list of available assets.
   * @param {AssetsListParams} params - The parameters for listing assets.
   * @returns {Promise<AssetsListResult>} A Promise that resolves to the list of assets.
   * @throws Will throw an error if the API request fails.
   */
  async assetsList(params: AssetsListParams): Promise<AssetsListResult> {
    return await this.rpcRequest<AssetsListParams, AssetsListResult>(
      "assets_list",
      params,
    );
  }
}
