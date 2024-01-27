import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

const POLYGON_MAINNET_CHAIN_ID = 137
const POLYGON_MUMBAI_TESTNET_CHAIN_ID = 80001

export const POLYGON_MAINNET_HEX_CHAIN_ID = 0x89

const POLYGON_MAINNET_DEFAULT_EXPLORER_URL = 'https://polygonscan.com/'
const POLYGON_MUMBAI_TESTNET_DEFAULT_EXPLORER_URL = 'https://mumbai.polygonscan.com/'

const POLYGON_MAINNET_DEFAULT_RPC = 'https://polygon-rpc.com'
const POLYGON_MUMBAI_TESTNET_DEFAULT_RPC = 'https://rpc-mumbai.maticvigil.com'

// export enum ChainId {
//   FUJI = 43113,
//   AVALANCHE = 43114,
//   CRYPTOSEALS = 6942069,
// }
// TODO : import sdk constants
// TODO : import sdk constants
// TODO : import sdk constants
// TODO : import sdk constants
// TODO : import sdk constants
// TODO : import sdk constants
// TODO : import sdk constants
// TODO : import sdk constants
export const LIQUIDITY_TOKEN_PRECISION = 18
export const LIQUIDITY_TOKEN_NAME = 'Baguette Liquidity'
export const LIQUIDITY_TOKEN_SYMBOL = 'BGL'

export enum ChainId {
  MUMBAI = POLYGON_MUMBAI_TESTNET_CHAIN_ID,
  POLYGON = POLYGON_MAINNET_CHAIN_ID
}

export const ChainLabel: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: 'Polygon Mumbai Testnet',
  [ChainId.POLYGON]: 'Polygon'
}

export const ChainExplorer: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: POLYGON_MUMBAI_TESTNET_DEFAULT_EXPLORER_URL,
  [ChainId.POLYGON]: POLYGON_MAINNET_DEFAULT_EXPLORER_URL
}
export const RPC_URL: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: POLYGON_MUMBAI_TESTNET_DEFAULT_RPC,
  [ChainId.POLYGON]: POLYGON_MAINNET_DEFAULT_RPC
}
export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
//   [ChainId.FUJI]: '0xBB6e8C136ca537874a6808dBFC5DaebEd9a57554',
//   [ChainId.AVALANCHE]: '0x3587B8c0136c2C3605a9E5B03ab54Da3e4044b50',
//   [ChainId.CRYPTOSEALS]: '0x1b55417301ba66e2E53E82B28EF87FeEd98663b7',
// }
export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: '0x15a34fd98dbf1c0116bdf740d501f735fca2891b', // TODO: update this !
  [ChainId.POLYGON]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f' // Polygon mainnet Uniswap v2 factory
}

// export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
//   [ChainId.FUJI]: '0xff99ac007cf1fdec4433d14d805e534a66720236eeec1657964ea15adacd258b',
//   [ChainId.AVALANCHE]: '0x81dbf51ab39dc634785936a3b34def28bf8007e6dfa30d4284c4b8547cb47a51',
//   [ChainId.CRYPTOSEALS]: '0x81dbf51ab39dc634785936a3b34def28bf8007e6dfa30d4284c4b8547cb47a51',
// }
export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: '0xce77f6bcd5997f0c469e2c41b88b633b4a59edecc2ff41ee9559c5e17484a70b', // TODO: update this !
  [ChainId.POLYGON]: '0x81dbf51ab39dc634785936a3b34def28bf8007e6dfa30d4284c4b8547cb47a51' // TODO: update this !
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
