import { INIT_CODE_HASH_MAP } from '../src/constants'

// import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
import { bytecode } from '@swapi-finance/contracts/hardhat-artifacts/src/contracts/Uniswap/v2-core/UniswapV2Pair.sol/UniswapV2Pair.json'
import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH_MAP = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH_MAP', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH_MAP).toEqual(INIT_CODE_HASH_MAP)
    })
  })
})
