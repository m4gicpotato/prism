import { PrismClient } from "./main.ts";

export function serializeObject<T>(obj: T): string {
  const serialized = Object.entries(obj as string[])
    .map(([key, value]) => `${key}=${value}`)
    .join(",");

  return serialized;
}

export class BeamContract<T> {
  constructor(
    private contract: number[] | string,
    private CID: string,
    protected client: PrismClient,
  ) {
  }

  protected async execute(data: T, parse = true) {
    const result = await this.client.invokeContract({
      contract: typeof this.contract !== "string" ? this.contract : undefined,
      contract_file: typeof this.contract === "string"
        ? this.contract
        : undefined,
      args: serializeObject<T>({ ...data, create_tx: false, cid: this.CID }),
    });

    if (parse) {
      return JSON.parse(result.output).res
    }

    return result
  }
}
