import React, { useEffect, useState } from 'react';
import TradingViewWidget from '../Common/TradingViewWidget';
import { axiosGet } from '../../api/services/axios';
import { Col, Divider, Image, Row } from 'antd';
import PercentageChangeTag from '../../utils/ui/PercentageChangeTag';
import { changeToInr } from '../../utils/utils';
import TimeIntervalSelector from '../Common/TimeIntervalSelector';

const CryptoContainer = ({data}) => {
  return (
    <div className='bg-white'>
      <Row>
        <Col className='p-4 flex items-center'>
          <Image src={data?.image} preview={false} height={'35px'} />
          <span className='font-bold text-lg pl-2' >{data?.name}</span>
          <sup><span className='text-xs p-4 font-medium '>{data?.symbol.toUpperCase()}</span></sup>
        </Col>
        <Col className='flex justify-center items-center ml-5'><div className='bg-[#808A9D] text-white p-2 rounded w-15 '>Rank #{data?.market_cap_rank}</div></Col>
      </Row>
      <Row className='w-1/5 pl-4'>
        <Col span={12} className='text-2xl font-medium'>${data?.current_price}</Col>
        <Col span={12} className='flex pl-4'><PercentageChangeTag change={data?.price_change_percentage_24h}/><span className='text-xs'>(24H)</span></Col>
        <Col className='text-sm'>{changeToInr(data?.current_price)}</Col>
      </Row>
      <Divider/>
      <Row className='font-medium flex items-center pl-2 justify-between'><Col>{`${data?.name} Price Chart`}<span>{`(USD)`}</span></Col>
      <Col span={10}><TimeIntervalSelector/></Col>
      </Row>
      <Divider/>
      <TradingViewWidget />
     
    </div>
  );
};

export default CryptoContainer;
