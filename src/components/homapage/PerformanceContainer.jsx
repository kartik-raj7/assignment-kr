import React from 'react';

const PerformanceContainer = ({ data }) => {
  const calculatePercentage = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  const getBackgroundColor = (value, min, max) => {
    const percentage = calculatePercentage(value, min, max);
    const hue = (percentage / 100) * 120;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div className='bg-white h-64 rounded p-4'>
      <div className='text-2xl font-medium'>Performance</div>
      <div className='py-8 flex justify-between'>
        <div>
          <div>Today's Low</div>
          <div>{data.low_24h}</div>
        </div>
        <div>
          <div className='color-bar' style={{ background: getBackgroundColor(data.current_price, data.low_24h, data.high_24h) }} />
          <div>Rate</div>
        </div>
        <div>
          <div>Today's High</div>
          <div>{data.high_24h}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceContainer;
