import React from 'react'
import {WalletFilledIcon, IconButton, useWalletModal} from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletIcon = ({ scale = "sm", color, mr = '15px' }) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
      <IconButton variant="text" scale="sm" mr={mr} id="open-settings-dialog-button" onClick={onPresentConnectModal}>
        <WalletFilledIcon height={32} width={32} color={color || 'textSubtle'} />
      </IconButton>
  )
}

export default ConnectWalletIcon
