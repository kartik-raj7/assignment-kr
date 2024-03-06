import { Image, Typography } from 'antd'
import React from 'react'
import CustomButton from '../../utils/ui/CustomButton'

const AdContainer = () => {
  return (
    <div className='bg-[#0052FE] flex flex-col rounded-lg justify-center'>
        <div className='flex justify-center py-5'><Typography className='text-3xl text-white w-[65%] font-semibold text-center'>Get Started with Koinx for FREE</Typography></div>
        <div className='flex justify-center py-3'> <Typography className='text-white w-[70%] text-center'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware towards tax reports</Typography></div>
        <Image src='../../../Ad_svg.svg' preview={false} height={'200px'}/>
        <div className='flex justify-center items-center pb-10 pt-4'><CustomButton color={'white'} height={'40px'} text={'Get Started For Free'} width={'220px'}/></div>
    </div>
  )
}

export default AdContainer