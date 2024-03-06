import { Button } from 'antd'
import React from 'react'

const CustomButton = ({text,height,color,width}) => {
  return (
    <Button style={{height:height,backgroundColor:color,width}}>{text}</Button>
  )
}

export default CustomButton