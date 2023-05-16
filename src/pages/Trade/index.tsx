import React, { useEffect, useState } from 'react'
import './style.scss'
import { useConfigs } from '../../state/config/useConfigs'
import { useCurrentPool } from '../../state/currentPool/hooks/useCurrentPool'
import { Chart } from '../../Components/Chart'
import { SWAP_TAB } from '../../utils/constant'
import { SwapBox } from '../../Components/SwapBox'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Tabs, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Card } from '../../Components/ui/Card'
import { PoolDetailAndHistory } from '../../Components/PoolDetailAndHistory'
import { useListTokens } from '../../state/token/hook'
import { useListPool } from '../../state/pools/hooks/useListPool'

export const Trade = ({ tab, pool }: {
  pool?: string,
  tab: Symbol
}) => {
  const { id, TOKEN_R } = useCurrentPool()
  const { chainId, useHistory, ddlEngine } = useConfigs()
  const { tokens } = useListTokens()
  const history = useHistory()
  const [changedIn24h, setChangedIn24h] = useState<number>(0)
  const { width } = useWindowSize()
  const isPhone = width && width < 992
  const { pools } = useListPool()
  const { updateCurrentPool } = useCurrentPool()

  // useEffect(() => {
  //   if (tokens[baseToken] && tokens[quoteToken] && cToken && ddlEngine) {
  //     ddlEngine.PRICE.get24hChange({
  //       baseToken: tokens[baseToken],
  //       cToken,
  //       chainId: chainId.toString(),
  //       quoteToken: tokens[quoteToken],
  //       currentPrice: weiToNumber(numberToWei(basePrice), 18 + tokens[quoteToken].decimal - tokens[baseToken].decimal)
  //     }).then((value1) => {
  //       setChangedIn24h(value1)
  //     })
  //     // ddlEngine.PRICE.get24hChangeByLog({
  //     //   baseId,
  //     //   currentPrice: basePrice,
  //     //   baseToken: tokens[baseToken],
  //     //   quoteToken: tokens[quoteToken],
  //     //   cToken
  //     // }).then((value) => {
  //     //   setChangedIn24h(value)
  //     // }).catch((e) => {
  //     //   console.error(e)
  //     //   ddlEngine.PRICE.get24hChange({
  //     //     baseToken: tokens[baseToken],
  //     //     cToken,
  //     //     chainId: chainId.toString(),
  //     //     quoteToken: tokens[quoteToken],
  //     //     currentPrice: basePrice
  //     //   })
  //     //     .then((value1) => {
  //     //       setChangedIn24h(value1)
  //     //     })
  //     // })
  //   }
  // }, [chainId, tokens, ddlEngine, cToken, quoteToken, baseToken])

  useEffect(() => {
    // console.log('configs?.addresses.pool', configs?.addresses.pool)
    // @ts-ignore
    if (pools && Object.keys(pools).length > 0 && pool && pools[pool]) {
      updateCurrentPool(Object.keys(pools)[0])
      // .then((data) => {
      //   // @ts-ignore
      //   if (Number(chainIdRef?.current?.value) === chainId) {
      //     dispatch(setCurrentPoolInfo(data))
      //   }
      // })
    }
  }, [chainId, pools, pool])

  return (
    <div className='exposure-page'>
      <div className='exposure-page__content'>
        <div className='exposure-page__content--left'>
          <Chart changedIn24h={changedIn24h} />
          {
            !isPhone && <div className='hidden-on-phone'>
              <PoolDetailAndHistory poolAddress={id} />
            </div>
          }
        </div>
        <div className='exposure-page__content--right'>
          <Tabs
            selectedIndex={tab === SWAP_TAB.EXPOSURE ? 0 : 1}
            onSelect={(index) => {
              history.push(index === 0 ? '/exposure' : '/swap')
            }}
          >
            {/* <TabList> */}
            {/*  /!*<Tab>Exposure</Tab>*!/ */}
            {/*  <Tab>Swap</Tab> */}
            {/* </TabList> */}
            <TabPanel>
              <Card className='trade-box card-in-tab'>
                {/* <ExposureBox changedIn24h={changedIn24h} /> */}
              </Card>
            </TabPanel>
            <TabPanel>
              <Card className='trade-box'>
                <SwapBox />
              </Card>
            </TabPanel>
          </Tabs>
          {/* <Card> */}
          {/*  <PoolTableCompact /> */}
          {/* </Card> */}
          {
            isPhone && <div className='hidden-on-desktop'>
              <PoolDetailAndHistory poolAddress={id} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
