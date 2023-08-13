import { useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { setConfigs, setEngine } from './reducer'
import configs from './configs'
import { addTokensReduce } from '../token/reducer'
import { Engine } from 'derivable-tools/dist/engine'
import { DEFAULT_CHAIN, ZERO_ADDRESS } from '../../utils/constant'
import { useSettings } from '../setting/hooks/useSettings'

export const useInitConfig = ({
  library,
  chainId,
  useSubPage,
  language,
  useLocation,
  useHistory,
  env,
  account
}: {
  library: any
  useLocation: any
  useHistory: any
  chainId: number
  useSubPage: any
  language: string
  account: string
  env: 'development' | 'production'
}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { settings: { scanApiKey } } = useSettings()

  const currentScanApiKey = useMemo(() => {
    return scanApiKey[chainId]
  }, [scanApiKey, chainId])

  useEffect(() => {
    dispatch(
      addTokensReduce({
        tokens: [configs[chainId || DEFAULT_CHAIN].nativeToken],
        chainId: chainId || DEFAULT_CHAIN
      })
    )
    dispatch(
      setConfigs({
        configs: configs[chainId || DEFAULT_CHAIN],
        chainId: chainId || DEFAULT_CHAIN,
        useSubPage,
        language,
        env,
        location,
        useHistory
      })
    )
  }, [location, useHistory, chainId, useSubPage, language, env])

  useEffect(() => {
    if (!chainId) return
    if (!account) {
      console.log('=======await sync account========')
    }

    console.log('chainId', chainId)
    const engine = new Engine(
      account || ZERO_ADDRESS,
      {
        storage: {
          // @ts-ignore
          setItem: (itemName, value) => localStorage.setItem(itemName, value),
          // @ts-ignore
          getItem: (itemName) => localStorage.getItem(itemName)
        },
        signer: library?.getSigner(),
        ...configs[chainId || DEFAULT_CHAIN],
        scanApiKey: currentScanApiKey || '',
        account: account || ZERO_ADDRESS
      },
      chainId
    )
    console.log('engine', engine)
    dispatch(setEngine({ engine }))
  }, [library, account, chainId, currentScanApiKey])
}
