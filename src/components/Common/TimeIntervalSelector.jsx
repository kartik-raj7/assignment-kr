import React, { useState } from 'react';
import { Button } from 'antd';

const TimeIntervalSelector = () => {
  const [selectedInterval, setSelectedInterval] = useState(null);

  const handleIntervalClick = (interval) => {
    setSelectedInterval(interval);
  };

  const buttonStyle = {
    backgroundColor: '#E2ECFE',
    color: '#1890ff',
  };

  return (
    <div className='flex justify-evenly'>
      <Button
        style={selectedInterval === '1H' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('1H')}
        className='border-none text-xs'
      >
        1H
      </Button>
      <Button
        style={selectedInterval === '24H' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('24H')}
        className='border-none text-xs'
      >
        24H
      </Button>
      <Button
        style={selectedInterval === '7D' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('7D')}
        className='border-none text-xs'
      >
        7D
      </Button>
      <Button
        style={selectedInterval === '1M' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('1M')}
        className='border-none text-xs'
      >
        1M
      </Button>
      <Button
        style={selectedInterval === '3M' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('3M')}
        className='border-none text-xs'
      >
        3M
      </Button>
      <Button
        style={selectedInterval === '6M' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('6M')}
        className='border-none text-xs'
      >
        6M
      </Button>
      <Button
        style={selectedInterval === '1Y' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('1Y')}
        className='border-none text-xs'
      >
        1Y
      </Button>
      <Button
        style={selectedInterval === 'ALL' ? buttonStyle : {}}
        onClick={() => handleIntervalClick('ALL')}
        className='border-none text-xs'
      >
        ALL
      </Button>
    </div>
  );
};

export default TimeIntervalSelector;
