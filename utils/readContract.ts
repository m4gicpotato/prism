export const readContract = async (name: string) =>
  Array.from(
    new TextEncoder().encode(await Deno.readTextFile(`./wasm/${name}.wasm`)),
  );
