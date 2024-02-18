import JSBI from 'jsbi'
import {
  INIT_CODE_HASH as UNIV2_INIT_CODE_HASH,
  FACTORY_ADDRESS_MAP as UNIV2_FACTORY_ADDRESS_MAP
} from '@uniswap/v2-sdk'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

const POLYGON_MAINNET_CHAIN_ID = 137
const POLYGON_MUMBAI_TESTNET_CHAIN_ID = 80001

// keep HEX_CHAIN_ID_MAP as string else it will be converted to int at build time
const POLYGON_MUMBAI_TESTNET_HEX_CHAIN_ID_MAP = '0x13881' // 80001
const POLYGON_MAINNET_HEX_CHAIN_ID_MAP = '0x89' // 137

const POLYGON_MAINNET_DEFAULT_EXPLORER_URL = 'https://polygonscan.com/'
const POLYGON_MUMBAI_TESTNET_DEFAULT_EXPLORER_URL = 'https://mumbai.polygonscan.com/'

const POLYGON_MAINNET_DEFAULT_RPC = 'https://polygon-rpc.com'
const POLYGON_MUMBAI_TESTNET_DEFAULT_RPC = 'https://rpc-mumbai.maticvigil.com'

export const LIQUIDITY_TOKEN_PRECISION = 18
export const LIQUIDITY_TOKEN_NAME = 'UNI-V2'
export const LIQUIDITY_TOKEN_SYMBOL = 'Uniswap V2'

export enum ChainId {
  MUMBAI = POLYGON_MUMBAI_TESTNET_CHAIN_ID,
  POLYGON = POLYGON_MAINNET_CHAIN_ID
}

export const CHAIN_LABEL_MAP: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: 'Polygon Mumbai Testnet',
  [ChainId.POLYGON]: 'Polygon'
}

export const HEX_CHAIN_ID_MAP: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: POLYGON_MUMBAI_TESTNET_HEX_CHAIN_ID_MAP,
  [ChainId.POLYGON]: POLYGON_MAINNET_HEX_CHAIN_ID_MAP
}

export const CHAIN_EXPLORER_MAP: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: POLYGON_MUMBAI_TESTNET_DEFAULT_EXPLORER_URL,
  [ChainId.POLYGON]: POLYGON_MAINNET_DEFAULT_EXPLORER_URL
}
export const RPC_URL_MAP: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: POLYGON_MUMBAI_TESTNET_DEFAULT_RPC,
  [ChainId.POLYGON]: POLYGON_MAINNET_DEFAULT_RPC
}

export const MULTICALL_NETWORKS_MAP: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: '0xe9939e7Ea7D7fb619Ac57f648Da7B1D425832631',
  [ChainId.POLYGON]: '0x275617327c958bD06b5D6b871E7f491D76113dd8'
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

export const FACTORY_ADDRESS_MAP: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: '0x15a34fd98dbf1c0116bdf740d501f735fca2891b', // Polygon Mumbai Testnet Uniswap v2 factory
  [ChainId.POLYGON]: UNIV2_FACTORY_ADDRESS_MAP[ChainId.POLYGON] // Polygon mainnet Uniswap v2 factory
}

export const INIT_CODE_HASH_MAP: { [chainId in ChainId]: string } = {
  [ChainId.MUMBAI]: '0xce77f6bcd5997f0c469e2c41b88b633b4a59edecc2ff41ee9559c5e17484a70b', // TODO: update this !
  [ChainId.POLYGON]: UNIV2_INIT_CODE_HASH
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
