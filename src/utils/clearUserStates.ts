import * as Sentry from '@sentry/react'
import { Dispatch } from '@reduxjs/toolkit'
import { connectorLocalStorageKey } from '@pancakeswap/uikit'
import { connectorsByName } from './web3React'
import { clearAllTransactions } from '../state/transactions/actions'

export const clearUserStates = (dispatch: Dispatch<any>, chainId: number) => {
  if (window.localStorage.getItem('walletconnect')) {
    connectorsByName.walletconnect.close()
    connectorsByName.walletconnect.walletConnectProvider = null
  }
  window.localStorage.removeItem(connectorLocalStorageKey)
  if (chainId) {
    dispatch(clearAllTransactions({ chainId }))
  }
}
