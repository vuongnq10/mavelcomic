import qs from 'qs';
import { publicKey, hash, timestamp } from './keys';

export const get = async id => {
  const params = {
    apikey: publicKey,
    hash,
    ts: timestamp,
  };

  const url = `https://gateway.marvel.com/v1/public/comics/${id}?${qs.stringify(params)}`;
  const res = await fetch(url, { method: 'get' });
  const data = await res.json();

  return data.data.results[0];
};
