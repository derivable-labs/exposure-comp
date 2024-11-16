// eslint-disable-next-line no-unused-vars
import { web3ReactState } from './customWeb3React/type'
// eslint-disable-next-line no-unused-vars
import { configsState } from './config/type'
// eslint-disable-next-line no-unused-vars
import { currentPoolState } from './currentPool/type'
// eslint-disable-next-line no-unused-vars
import { walletState } from './wallet/type'
// eslint-disable-next-line no-unused-vars
import { tokensState } from './token/type'
// eslint-disable-next-line no-unused-vars
import { resourcesState } from './resources/type'
// eslint-disable-next-line no-unused-vars
import { BigNumber } from 'ethers'
// eslint-disable-next-line no-unused-vars
import { settingsState } from './setting/type'
// eslint-disable-next-line no-unused-vars
import { Uni3PositionsType } from './uni3Positions/type'

export interface State {
  resources: resourcesState
  configs: configsState
  web3react: web3ReactState
  currentPool: currentPoolState
  settings: settingsState
  wallet: walletState
  tokens: tokensState
  uni3Positions: Uni3PositionsType
}

export interface PoolType {
  address: string
  address0: string
  address1: string
  creator: string
  reserve0: BigNumber
  reserve1: BigNumber
}
