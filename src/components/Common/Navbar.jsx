import React from 'react'
import { Button, Col, Image, Row } from 'antd'
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <Row className='flex justify-between items-center bg-white w-full py-2 px-8'>
        <Col span={12} className='flex items-start'><Image src="/logo.svg" height="35px" preview={false}/></Col>
        <Col span={12} className='flex justify-end flex sm:hidden '><IoMenu className='mr-4'/></Col>
        <Col span={9} className='flex justify-evenly hidden sm:flex items-center font-bold'>
        <Col span={5}>Crypto Taxes</Col>
        <Col span={5}>Free Tools</Col>
        <Col span={5}>Resource Center</Col>
        <Button type='primary' className='bg-[#1677FF] font-bold'>Get Started</Button>
        </Col>
    </Row>

  )
}

export default Navbar