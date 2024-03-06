import React, { useEffect, useState } from 'react'
import Navbar from '../components/Common/Navbar'
import BreadCrumb from '../components/Common/BreadCrumb'
import CryptoContainer from '../components/homapage/CryptoContainer'
import AdContainer from '../components/homapage/AdContainer'
import TrendingContainer from '../components/homapage/TrendingContainer'
import Fundamentals from '../components/homapage/FundamentalTabs'
import { axiosGet } from '../api/services/axios'

const Homepage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe,setTimeframe] = useState('7d');
  async function getData() {
    const endpoint = 'coins/markets';
    const params = {
      vs_currency: 'usd',
      ids: 'bitcoin',
    };

    try {
      const response = await axiosGet(endpoint, params);
      setData(response[0]);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='w-full h-full'>
    <Navbar/>
    <BreadCrumb/>
    <div className='px-8 py-2 flex'>
    <div className='w-4/6'>
    <CryptoContainer data={data}/>
    <Fundamentals data={data}/>
    </div>
    <div className='w-2/6 flex justify-center items-start'>
    <div className='w-11/12'>
    <AdContainer/>
    <TrendingContainer/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Homepage