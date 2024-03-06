import { Image } from 'antd'
import React from 'react'
import PercentageChangeTag from '../../utils/ui/PercentageChangeTag'

const TrendingCoin = ({data}) => {
console.log(data)
  return (
    <div className='flex justify-between items-center w-full'>
    <div className='flex'>
        <div><Image src={data.item.thumb} height={'25px'}/></div>
        <div className='pl-2'>{data.item.name}</div>
    </div>
    <div>
        <PercentageChangeTag change={data.item.data.price_change_percentage_24h
.usd}/>
    </div>
    </div>
  )
}

export default TrendingCoin