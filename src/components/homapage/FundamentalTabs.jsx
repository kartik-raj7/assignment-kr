import React from 'react'
import { Divider, Tabs } from 'antd';
import PerformanceContainer from './PerformanceContainer';
const Fundamentals = ({data}) => {
    const onChange = (key) => {
      console.log(key);
    };
    const items = [
      {
        key: '1',
        label: 'Overview',
        children: <PerformanceContainer data={data}/>,
      },
      {
        key: '2',
        label: 'Fundamentals',
        children: 'Content of Tab Pane 2',
      },
      {
        key: '3',
        label: 'News Insights',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '4',
        label: 'Sentiments',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '5',
        label: 'Team',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '6',
        label: 'Technicals',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '7',
        label: 'Tokenemics',
        children: 'Content of Tab Pane 3',
      },

    ];
  return (
    <div>

<Tabs defaultActiveKey="1" items={items} onChange={onChange} className='py-2 bg-transparent'/>
    </div>
    
  )
}

export default Fundamentals