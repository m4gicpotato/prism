interface JsonRpcRequest<P = unknown> {
  jsonrpc: "2.0";
  id: string | number;
  method: string;
  params: P;
}

interface JsonRpcResponse<R = unknown> {
  jsonrpc: "2.0";
  id: string | number;
  result?: R;
  error?: {
    code: number;
    message: string;
  };
}

export class RpcClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${endpoint}/api/wallet`;
  }

  protected async rpcRequest<P = unknown, R = unknown>(
    method: string,
    params?: P,
    id: string | number = Math.random().toString(),
  ): Promise<R> {
    const body: JsonRpcRequest<P> = {
      jsonrpc: "2.0",
      id: `call-${id}`,
      method,
      params: params ? params : {} as P,
    };

    const response = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json: JsonRpcResponse<R> = await response.json();
    if (json.error) {
      throw new Error(`RPC Error: ${json.error.message}`);
    }

    return json.result as R;
  }
}
