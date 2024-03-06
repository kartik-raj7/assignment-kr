import React, { useEffect, useState } from 'react';
import { axiosGet } from '../../api/services/axios';
import TrendingCoin from '../Common/TrendingCoin';

const TrendingContainer = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    const endpoint = 'search/trending';
    try {
      const response = await axiosGet(endpoint);
      setData(response.coins.slice(0, 5)); 
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
    <div className='bg-white rounded-lg my-4 flex items-center justify-center'>
    <div className='w-10/12'>
      <div className='text-xl font-medium py-2'>Trending Coins (24h) </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          {data.map((coin) => (
            <div key={coin.id} className='py-2'>
              <TrendingCoin data={coin}/>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default TrendingContainer;
