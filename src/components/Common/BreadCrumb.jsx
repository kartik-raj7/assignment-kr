import React from 'react';
import { Breadcrumb } from 'antd';
const BreadCrumb = () => (
  <Breadcrumb
  className='p-2 px-8'
    separator=">>"
    items={[
      {
        title: 'Cryptocurrencies',
      },
      {
        title: 'Bitcoin',
      },
    ]}
  />
);
export default BreadCrumb;