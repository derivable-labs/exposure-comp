import { bn, numberToWei, parseCallStaticError, weiToNumber } from '../../../utils/helpers'
import { useEffect, useState } from 'react'
import { useListTokens } from '../../../state/token/hook'
import { BigNumber } from 'ethers'
import { useConfigs } from '../../../state/config/useConfigs'
import { useWalletBalance } from '../../../state/wallet/hooks/useBalances'

export const useCalculateSwap = ({
  amountIn,
  inputTokenAddress,
  outputTokenAddress,
  tokenOutMaturity
}: {
  amountIn: string
  inputTokenAddress: string,
  outputTokenAddress: string
  tokenOutMaturity: BigNumber
}) => {
  const { tokens } = useListTokens()
  const [callError, setCallError] = useState<string>('')
  const [amountOut, setAmountOut] = useState<string>('')
  const [txFee, setTxFee] = useState<BigNumber>(bn(0))
  const [gasUsed, setGasUsed] = useState<BigNumber>(bn(0))
  const [amountOutWei, setAmountOutWei] = useState<BigNumber>(bn(0))
  const [loading, setLoading] = useState<boolean>(false)
  const { ddlEngine } = useConfigs()
  const { balances } = useWalletBalance()

  useEffect(() => {
    if (tokens[inputTokenAddress] && tokens[outputTokenAddress] && amountIn && Number(amountIn)) {
      calcAmountOut()
    } else if (Number(amountIn) === 0) {
      setAmountOut('')
      setTxFee(bn(0))
      setGasUsed(bn(0))
      setAmountOutWei(bn(0))
    }
  }, [tokens[inputTokenAddress] && tokens[outputTokenAddress], tokenOutMaturity, amountIn])

  const calcAmountOut = async () => {
    if (!amountOut) {
      setCallError('Calculating...')
    }
    setLoading(true)
    // @ts-ignore
    ddlEngine.SWAP.calculateAmountOuts([{
      tokenIn: inputTokenAddress,
      tokenOut: outputTokenAddress,
      amountIn: bn(numberToWei(amountIn, tokens[inputTokenAddress]?.decimal || 18)),
      useSweep: tokenOutMaturity?.gt(0) && balances[outputTokenAddress],
      currentBalanceOut: balances[outputTokenAddress]
    }]).then((res: any) => {
      const [aOuts, gasLeft] = res
      setAmountOutWei(aOuts[0]?.amountOut || bn(0))
      setAmountOut(weiToNumber(aOuts[0]?.amountOut || 0, tokens[outputTokenAddress].decimal || 18))
      // @ts-ignore
      setTxFee(detectTxFee(gasLeft))
      // @ts-ignore
      setGasUsed(gasLeft)
      setCallError('')
    }).catch((e: any) => {
      const error = parseCallStaticError(e)
      setAmountOut('0')
      setTxFee(bn(0))
      setGasUsed(bn(0))
      setCallError(error ?? e)
      console.error(error)
      console.error(e)
    }).finally(() => {
      setLoading(false)
    })
  }

  const detectTxFee = (gasUsed: BigNumber) => {
    return gasUsed.mul(2).div(3).mul(5 * 10 ** 9)
  }

  return {
    loading,
    callError,
    txFee,
    gasUsed,
    amountOutWei,
    amountOut
  }
}
