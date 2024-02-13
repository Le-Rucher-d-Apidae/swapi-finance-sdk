import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

const POLYGON_MAINNET_CHAIN_ID = 137
const POLYGON_MUMBAI_TESTNET_CHAIN_ID = 80001

export const POLYGON_MAINNET_HEX_CHAIN_ID = '0x89' // 137 // keep it as string else 0x89 will be converted to 137 at build time

const POLYGON_MAINNET_DEFAULT_EXPLORER_URL = 'https://polygonscan.com/'
const POLYGON_MUMBAI_TESTNET_DEFAULT_EXPLORER_URL = 'https://mumbai.polygonscan.com/'

const POLYGON_MAINNET_DEFAULT_RPC = 'https://polygon-rpc.com'
const POLYGON_MUMBAI_TESTNET_DEFAULT_RPC = 'https://rpc-mumbai.maticvigil.com'

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

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: '0x15a34fd98dbf1c0116bdf740d501f735fca2891b', // TODO: update this !
  [ChainId.POLYGON]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f' // Polygon mainnet Uniswap v2 factory
}

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
