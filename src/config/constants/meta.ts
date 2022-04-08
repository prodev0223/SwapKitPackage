import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PancakeSwap',
  description:
    'The DEX on Binance Smart Chain (BSC) with the best farms in DeFi.',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SwapKit')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SwapKit')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SwapKit')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SwapKit')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SwapKit')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SwapKit')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SwapKit')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SwapKit')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
