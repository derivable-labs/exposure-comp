import React, { useMemo, useState } from 'react'
import { BarChart, Bar, YAxis } from 'recharts'
import './style.scss'
import isEqual from 'react-fast-compare'
import { ButtonExecute } from '../ui/Button'
// import { SliderBar } from '../SliderBar'
import Slider from 'rc-slider'

const fakeData = [
  {
    x: 2,
    xDisplay: '2x',
    bars: [
      {
        size: 30, // pool reserve
        color: 'aqua'
      },
      {
        size: 70, // pool reserve
        color: 'green'
      }
    ]
  },
  {
    x: 5,
    xDisplay: '5x',
    bars: [
      {
        size: 12, // pool reserve
        color: 'aqua'
      },
      {
        size: 88, // pool reserve
        color: 'green'
      },
      {
        size: 37,
        color: 'aqua'
      }
    ]
  },
  {
    x: 15,
    xDisplay: '15x',
    bars: [
      {
        size: 12,
        color: 'aqua'
      }
    ]
  },
  {
    x: 20,
    xDisplay: '20x',
    bars: [
      {
        size: 35, // pool reserve
        color: 'aqua'
      },
      {
        size: 65, // pool reserve
        color: 'green'
      }
    ]
  }
]

const renderBar = (barData: any, barDataEntriesKeys: any, barColor: any) => {
  const barArray = []
  // console.log(barData)
  for (let i = 0; i < barDataEntriesKeys.length; i++) {
    barArray.push(
      <Bar
        dataKey={barDataEntriesKeys[i]}
        stackId='a'
        fill={barColor[i]}
        onClick={() => {
          console.log(barData[barDataEntriesKeys[i]])
        }}
      />
    )
  }

  return barArray
}

const StackedBarChart = ({
  xDisplay,
  barData,
  barColor
}: {
  xDisplay: string
  barData?: {}
  barColor?: {}
}) => {
  const rightPixel = xDisplay.length === 2 ? '-7px' : '-4px'
  const barDataEntriesKeys = Object.keys(barData || [])
  const barColorValues = []
  const barSize = []
  const code = 'a'.charCodeAt(0)
  for (let i = 0; i < Object.keys(barColor || {}).length; i++) {
    barColorValues.push(barColor?.[String.fromCharCode(code + i)])
    barSize.push(barData?.[String.fromCharCode(code + i)]?.size)
  }
  const barTotalSize = barSize.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)

  const barSizeData = useMemo(() => {
    const result = {}
    for (const i in barData) {
      result[i] = barData[i].size
    }
    return result
  }, [barData])

  return (
    <div style={{ position: 'relative' }}>
      {xDisplay}
      {xDisplay === '0x' ? (
        <div />
      ) : (
        <div
          style={{
            position: 'absolute',
            top: `${
              barTotalSize === 100
                ? '-330px'
                : barTotalSize > 100
                ? `-${330 + (barTotalSize - 100)}px`
                : `-${330 - (100 - barTotalSize)}px`
            }`,
            right: rightPixel
          }}
        >
          <BarChart width={30} height={barTotalSize + 200} data={[barSizeData]}>
            {renderBar(barData, barDataEntriesKeys, barColorValues)}
          </BarChart>
        </div>
      )}
    </div>
  )
}

const Component = ({
  visible,
  setVisible,
  callBack
}: {
  visible: boolean
  setVisible: any
  callBack?: any
}) => {
  const [leverage, setLeverage] = useState<number>(1)

  const initToChar = (num: any) => {
    const code = 'a'.charCodeAt(0)
    return String.fromCharCode(code + num)
  }

  const getBarColor = (data: any) => {
    const barColor = {}
    for (let i = 0; i < data.length; i++) {
      barColor[initToChar(i)] = data[i].color
    }
    return barColor
  }

  const getBarData = (data: any) => {
    const barData = {}
    for (let i = 0; i < data.length; i++) {
      barData[initToChar(i)] = data[i]
    }
    return barData
  }

  const getMark = () => {
    const finalData = {}
    // const barData = {}
    fakeData.map((data) => {
      finalData[data.x] = (
        <StackedBarChart
          xDisplay={data.xDisplay}
          barData={getBarData(data.bars)}
          barColor={getBarColor(data.bars)}
        />
      )
    })

    return {
      ...finalData,
      0: <StackedBarChart xDisplay='0x' />
    }
  }

  return (
    <div className={`swap-modal  ${visible ? 'show' : ''}`}>
      <div className='overlay' onClick={() => setVisible(false)} />
      <div className='modal' style={{ minWidth: '500px', minHeight: '700px' }}>
        <div className='btn-close-wrap'>
          <span className='title'>Adjust Leverage</span>
          <span className='btn-close' onClick={() => setVisible(false)}>
            {/* <ExitIcon /> */}X
          </span>
        </div>
        <div className='modal-content'>
          <div className='beverage-modal'>
            <p className='mb-2'>Leverage</p>
            <div
              className='mb-2'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '48px',
                padding: '12px',
                backgroundColor: '#2B3139',
                borderRadius: '4px'
              }}
            >
              +
              <div>
                <p style={{ fontSize: '16px', color: '#EAECEF' }}>{leverage}</p>
              </div>
              -
            </div>
            <div style={{ marginTop: '400px' }}>
              <Slider
                min={0}
                max={fakeData[fakeData.length - 1].x}
                step={null}
                count={1}
                value={leverage}
                onChange={(e: number) => {
                  setLeverage(e)
                }}
                dotStyle={{
                  background: '#303236',
                  borderRadius: '2px',
                  width: '1px',
                  borderColor: '#303236',
                  borderWidth: '2px',
                  bottom: '-1px'
                }}
                trackStyle={{ backgroundColor: '#03c3ff', height: 2 }}
                handleStyle={{
                  backgroundColor: 'white',
                  borderColor: '#03c3ff',
                  borderWidth: '2px'
                }}
                activeDotStyle={{
                  borderColor: '#03c3ff'
                }}
                marks={getMark()}
                railStyle={{ backgroundColor: '#303236', height: '2px' }}
              />
            </div>
            <div className='text-center'>
              <ButtonExecute>Confirm</ButtonExecute>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const BeverageModal = React.memo(Component, (prevProps, nextProps) =>
  isEqual(prevProps, nextProps)
)