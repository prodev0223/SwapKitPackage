import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import {
  CampaignType,
  SerializedFarmConfig,
  LotteryStatus,
  LotteryTicket,
  DeserializedPoolConfig,
  SerializedPoolConfig,
  Team,
  TranslatableText,
  DeserializedFarmConfig,
  FetchStatus,
} from 'config/constants/types'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface BigNumberToJson {
  type: 'BigNumber'
  hex: string
}

export type SerializedBigNumber = string

interface SerializedFarmUserData {
  allowance: string
  tokenBalance: string
  stakedBalance: string
  earnings: string
}

export interface DeserializedFarmUserData {
  allowance: BigNumber
  tokenBalance: BigNumber
  stakedBalance: BigNumber
  earnings: BigNumber
}

export interface SerializedFarm extends SerializedFarmConfig {
  tokenPriceBusd?: string
  quoteTokenPriceBusd?: string
  tokenAmountTotal?: SerializedBigNumber
  lpTotalInQuoteToken?: SerializedBigNumber
  lpTotalSupply?: SerializedBigNumber
  tokenPriceVsQuote?: SerializedBigNumber
  poolWeight?: SerializedBigNumber
  userData?: SerializedFarmUserData
}

export interface DeserializedFarm extends DeserializedFarmConfig {
  tokenPriceBusd?: string
  quoteTokenPriceBusd?: string
  tokenAmountTotal?: BigNumber
  lpTotalInQuoteToken?: BigNumber
  lpTotalSupply?: BigNumber
  tokenPriceVsQuote?: BigNumber
  poolWeight?: BigNumber
  userData?: DeserializedFarmUserData
}

export enum VaultKey {
  CakeVault = 'cakeVault',
  IfoPool = 'ifoPool',
}

interface CorePoolProps {
  startBlock?: number
  endBlock?: number
  apr?: number
  rawApr?: number
  stakingTokenPrice?: number
  earningTokenPrice?: number
  vaultKey?: VaultKey
}

export interface DeserializedPool extends DeserializedPoolConfig, CorePoolProps {
  totalStaked?: BigNumber
  stakingLimit?: BigNumber
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
}

export interface SerializedPool extends SerializedPoolConfig, CorePoolProps {
  totalStaked?: SerializedBigNumber
  stakingLimit?: SerializedBigNumber
  userData?: {
    allowance: SerializedBigNumber
    stakingTokenBalance: SerializedBigNumber
    stakedBalance: SerializedBigNumber
    pendingReward: SerializedBigNumber
  }
}

export interface Profile {
  userId: number
  points: number
  teamId: number
  collectionAddress: string
  tokenId: number
  isActive: boolean
  username: string
  team: Team
  hasRegistered: boolean
}

// Slices states

export interface SerializedFarmsState {
  data: SerializedFarm[]
  loadArchivedFarmsData: boolean
  userDataLoaded: boolean
  loadingKeys: Record<string, boolean>
}

export interface DeserializedFarmsState {
  data: DeserializedFarm[]
  loadArchivedFarmsData: boolean
  userDataLoaded: boolean
}

export interface VaultFees {
  performanceFee: number
  callFee: number
  withdrawalFee: number
  withdrawalFeePeriod: number
}

export interface VaultUser {
  isLoading: boolean
  userShares: string
  cakeAtLastUserAction: string
  lastDepositedTime: string
  lastUserActionTime: string
}

export interface IfoVaultUser extends VaultUser {
  credit: string
}

export interface CakeVault {
  totalShares?: string
  pricePerFullShare?: string
  totalCakeInVault?: string
  estimatedCakeBountyReward?: string
  totalPendingCakeHarvest?: string
  fees?: VaultFees
  userData?: VaultUser
}

export interface IfoCakeVault extends Omit<CakeVault, 'userData'> {
  userData?: IfoVaultUser
  creditStartBlock?: number
  creditEndBlock?: number
}

export interface PoolsState {
  data: SerializedPool[]
  cakeVault: CakeVault
  ifoPool: IfoCakeVault
  userDataLoaded: boolean
}

export interface ProfileState {
  isInitialized: boolean
  isLoading: boolean
  hasRegistered: boolean
  data: Profile
  profileAvatars: {
    [key: string]: {
      username: string
      hasRegistered: boolean
      usernameFetchStatus: FetchStatus
      avatarFetchStatus: FetchStatus
    }
  }
}

export type TeamResponse = {
  0: string
  1: string
  2: string
  3: string
  4: boolean
}

export type TeamsById = {
  [key: string]: Team
}

export interface TeamsState {
  isInitialized: boolean
  isLoading: boolean
  data: TeamsById
}

export interface Achievement {
  id: string
  type: CampaignType
  address: string
  title: TranslatableText
  description?: TranslatableText
  badge: string
  points: number
}

// Block

export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Predictions

export enum BetPosition {
  BULL = 'Bull',
  BEAR = 'Bear',
  HOUSE = 'House',
}

export enum PredictionStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
  ERROR = 'error',
}

export interface Round {
  id: string
  epoch: number
  position: BetPosition
  failed: boolean
  startAt: number
  startBlock: number
  startHash: string
  lockAt: number
  lockBlock: number
  lockHash: string
  lockPrice: number
  lockRoundId: string
  closeAt: number
  closeBlock: number
  closeHash: string
  closePrice: number
  closeRoundId: string
  totalBets: number
  totalAmount: number
  bullBets: number
  bullAmount: number
  bearBets: number
  bearAmount: number
}

export interface Market {
  paused: boolean
  epoch: number
}

export enum HistoryFilter {
  ALL = 'all',
  COLLECTED = 'collected',
  UNCOLLECTED = 'uncollected',
}

export interface LedgerData {
  [key: string]: {
    [key: string]: ReduxNodeLedger
  }
}

export interface RoundData {
  [key: string]: ReduxNodeRound
}

export interface ReduxNodeLedger {
  position: BetPosition
  amount: BigNumberToJson
  claimed: boolean
}

export interface NodeLedger {
  position: BetPosition
  amount: EthersBigNumber
  claimed: boolean
}

export interface ReduxNodeRound {
  epoch: number
  startTimestamp: number | null
  lockTimestamp: number | null
  closeTimestamp: number | null
  lockPrice: BigNumberToJson | null
  closePrice: BigNumberToJson | null
  totalAmount: BigNumberToJson
  bullAmount: BigNumberToJson
  bearAmount: BigNumberToJson
  rewardBaseCalAmount: BigNumberToJson
  rewardAmount: BigNumberToJson
  oracleCalled: boolean
  lockOracleId: string
  closeOracleId: string
}

export interface NodeRound {
  epoch: number
  startTimestamp: number | null
  lockTimestamp: number | null
  closeTimestamp: number | null
  lockPrice: EthersBigNumber | null
  closePrice: EthersBigNumber | null
  totalAmount: EthersBigNumber
  bullAmount: EthersBigNumber
  bearAmount: EthersBigNumber
  rewardBaseCalAmount: EthersBigNumber
  rewardAmount: EthersBigNumber
  oracleCalled: boolean
  closeOracleId: string
  lockOracleId: string
}

export type LeaderboardFilterTimePeriod = '1d' | '7d' | '1m' | 'all'

export interface LeaderboardFilter {
  address?: string
  orderBy?: string
  timePeriod?: LeaderboardFilterTimePeriod
}

// Voting

/* eslint-disable camelcase */
/**
 * @see https://hub.snapshot.page/graphql
 */
export interface VoteWhere {
  id?: string
  id_in?: string[]
  voter?: string
  voter_in?: string[]
  proposal?: string
  proposal_in?: string[]
}

export enum SnapshotCommand {
  PROPOSAL = 'proposal',
  VOTE = 'vote',
}

export enum ProposalType {
  ALL = 'all',
  CORE = 'core',
  COMMUNITY = 'community',
}

export enum ProposalState {
  ACTIVE = 'active',
  PENDING = 'pending',
  CLOSED = 'closed',
}

export interface Space {
  id: string
  name: string
}

export interface Proposal {
  author: string
  body: string
  choices: string[]
  end: number
  id: string
  snapshot: string
  space: Space
  start: number
  state: ProposalState
  title: string
}


export interface UserRound {
  claimed: boolean
  lotteryId: string
  status: LotteryStatus
  endTime: string
  totalTickets: string
  tickets?: LotteryTicket[]
}

// Global state

export interface State {
  block: BlockState
  farms: SerializedFarmsState
  pools: PoolsState
}
