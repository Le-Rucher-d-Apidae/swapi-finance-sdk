// import { ChainId, WAVAX, Token, Fetcher } from '../src'
import { ChainId, WCURRENCY, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    // const token = await Fetcher.fetchTokenData(ChainId.AVALANCHE, '0x6B175474E89094C44Da98b954EedeAC495271d0F') // DAI
    const token = await Fetcher.fetchTokenData(ChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063') // DAI // TODO: update this !
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    // const token = await Fetcher.fetchTokenData(ChainId.AVALANCHE, '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A') // DGD
    const token = await Fetcher.fetchTokenData(ChainId.POLYGON, '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A') // DGD // TODO: update this !
    expect(token.decimals).toEqual(9)
  })

  it('Pair', async () => {
    // const token = new Token(ChainId.FUJI, '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735', 18) // DAI
    // const pair = await Fetcher.fetchPairData(WAVAX[ChainId.FUJI], token)
    const token = new Token(ChainId.MUMBAI, '0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1', 18) // DAI // TODO: update this !
    // const pair = await Fetcher.fetchPairData(WAVAX[ChainId.FUJI], token)
    const pair = await Fetcher.fetchPairData(WCURRENCY[ChainId.MUMBAI], token)
    expect(pair.liquidityToken.address).toEqual('0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449') // TODO: update this !
  })
})
