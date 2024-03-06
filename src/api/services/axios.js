import axios from "axios";
import { config } from '../../config';

const { baseUrl, coingeckoapikey } = config;

export const axiosGet = async (endpoint, params = {}, contentType = 'application/json') => {
  let response = {};

  try {
    const result = await axios.get(`${baseUrl}/${endpoint}`, {
      headers: {
        'Content-Type': contentType,
      },
      params: {
        ...params,
        x_cg_api_key: coingeckoapikey,
      },
    });

    response = result.data || {};
    response.status = result?.status <= 203;
    response.message = result?.data?.message;
  } catch (e) {
    response.status = false;
    response.message = 'Something went wrong';
    response.data = e;
  }

  return response;
};
