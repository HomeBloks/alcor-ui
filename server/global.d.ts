declare global {
  type Network = {
    readonly name: string;
    baseToken: {
      symbol: string,
      contract: string,
      precision: number
    },
    CMC_UCIDS: string[]
  }
}
export {}
