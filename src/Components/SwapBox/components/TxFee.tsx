import { Text, TextGrey, TextSell, TextWarning } from '../../ui/Text'
import { formatWeiToDisplayNumber } from '../../../utils/formatBalance'
import { WEI, IEW, formatPercent, formatFloat, NUM, div, zerofy } from '../../../utils/helpers'
import { Box } from '../../ui/Box'
import React, { useEffect, useState } from 'react'
import { InfoRow } from '../../ui/InfoRow'
import { useNativePrice } from '../../../hooks/useTokenPrice'
import { BigNumber } from 'ethers'
import { useConfigs } from '../../../state/config/useConfigs'
import { SkeletonLoader } from '../../ui/SkeletonLoader'
import { useFeeData } from '../../../state/resources/hooks/useFeeData'
import { Position } from '../../../utils/type'
import { useSettings } from '../../../state/setting/hooks/useSettings'
import Tooltip from '../../Tooltip/Tooltip'
import { NetValue, VALUE_IN_USD_STATUS } from '../../Positions'
import { MIN_USD } from '../../../utils/constant'

export const TxFee = ({
  position,
  gasUsed,
  payoffRate,
  loading,
  isMaxBalance,
  amountIn,
  valueIn,
  valueInUsdStatus
}: {
  position?: Position
  gasUsed: BigNumber
  payoffRate?: number
  loading?: boolean
  amountIn?:string
  valueIn?:string
  valueInUsdStatus?: VALUE_IN_USD_STATUS
  isMaxBalance?: boolean
  // isCloseModal?:
}) => {
  const { configs } = useConfigs()
  const { settings } = useSettings()
  const { data: nativePrice } = useNativePrice()
  const [gasPrice, setGasPrice] = useState<any>(BigNumber.from(10 ** 8))
  const { feeData } = useFeeData()
  useEffect(() => {
    setGasPrice(feeData?.gasPrice ?? 1)
  }, [feeData])

  const closingFee = position?.calulateClosingFee() ?? { fee: 0 }

  let slippage = 0
  if (payoffRate != null) {
    if (closingFee.fee) {
      payoffRate = payoffRate / (1 - closingFee.fee)
    }
    // TODO: handle opening fee here
    slippage = 1 - Math.min(1, payoffRate)
  }

  const feeFormat = formatPercent(closingFee.fee ?? 0, 2, true)
  const slippageFormat = formatPercent(slippage, 2, true)
  // formatLocalisedCompactNumber(formatFloat(valueUsd))

  const renderFee = () => {
    if (!nativePrice || !gasPrice || !gasUsed?.gt(0)) {
      return <Text>&nbsp;</Text>
    }
    const fee = gasUsed.mul(gasPrice)
    const feeUSD = IEW(fee.mul(WEI(nativePrice)), 36)
    if (NUM(feeUSD) < MIN_USD) {
      return <Text>{`less than $${MIN_USD}`}</Text>
    }
    return <Text>
      {zerofy(IEW(fee, 18))}
      <TextGrey> {configs.nativeSymbol ?? 'ETH'} </TextGrey>
      (${zerofy(feeUSD)})
    </Text>
  }

  return (
    <Box borderColor='default' className='swap-info-box mt-1 mb-1'>
      {slippageFormat === 0 ? (
        ''
      ) : (
        <InfoRow>
          <TextGrey>Slippage</TextGrey>
          <SkeletonLoader loading={!!loading}>
            <span>
              {slippage > settings.slippageTolerance ? (
                <TextSell>{slippageFormat}%</TextSell>
              ) : slippage > settings.slippageTolerance / 2 ? (
                <TextWarning>{slippageFormat}%</TextWarning>
              ) : (
                <Text>{slippageFormat}%</Text>
              )}
            </span>
          </SkeletonLoader>
        </InfoRow>
      )}
      {(settings.slippageTolerance && String(valueIn) !== '0' && valueInUsdStatus) ? (
        <InfoRow>
          <TextGrey>Min Value Received</TextGrey>
          <SkeletonLoader loading={!!loading}>
            <NetValue
              valueInUsdStatus={valueInUsdStatus}
              position={{
                valueU: String(Number(isMaxBalance ? position?.valueU : valueIn) * (1 - settings.slippageTolerance)) || '0',
                valueR: String(Number(isMaxBalance ? position?.valueR : amountIn) * (1 - settings.slippageTolerance)) || '0',
                pool: position?.pool,
              }}
              isPhone
            />
          </SkeletonLoader>
        </InfoRow>
      ) : ''}
      <InfoRow>
        <TextGrey>Network Fee</TextGrey>
        <SkeletonLoader loading={!!loading}>
          <Tooltip
            position='right-bottom'
            handle={
              <div>
                {renderFee()}
              </div>
            }
            renderContent={() => (
              <div>
                <div>
                  <TextGrey>Estimated Gas:&nbsp;</TextGrey>
                  <Text>{formatWeiToDisplayNumber(gasUsed, 0, 0)}</Text>
                </div>
                <div>
                  <TextGrey>Gas Price:&nbsp;</TextGrey>
                  <Text>
                    {(gasPrice).gte(1e6)
                      ? zerofy(div(gasPrice, 1e9)) + ' gwei'
                      : NUM(gasPrice).toLocaleString() + ' wei'}
                  </Text>
                </div>
                <div>
                  <TextGrey>{configs.nativeSymbol} Price:&nbsp;</TextGrey>
                  <Text>
                    ${formatFloat(nativePrice || configs.nativePriceUSD, undefined, 4, true)}
                  </Text>
                </div>
              </div>
            )}
          />
        </SkeletonLoader>
      </InfoRow>
      {feeFormat === 0 ? (
        ''
      ) : (
        <InfoRow>
          <TextGrey>Anti-bot Fee</TextGrey>
          <span>
            {closingFee.isVesting ? (
              <TextSell>{feeFormat}%</TextSell>
            ) : (
              <TextWarning>{feeFormat}%</TextWarning>
            )}
          </span>
        </InfoRow>
      )}

    </Box>
  )
}
