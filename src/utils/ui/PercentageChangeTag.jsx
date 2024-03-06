import React from 'react';
import { Tag } from 'antd';

const PercentageChangeTag = ({ change }) => {
  const isPositive = change > 0;
  const formattedChange = Math.abs(change).toFixed(2);

  return (
    <Tag
      style={{ backgroundColor: isPositive ? '#EBF9F4' : '#FCE9E6',color:isPositive ? '#14B079' : '#E96975',borderColor:isPositive ? '#14B079' : '#E96975' }}
      className='flex justify-center items-center h-6'
    >
      {isPositive ? '+' : '-'}
      {formattedChange}%
    </Tag>
  );
};

export default PercentageChangeTag;
