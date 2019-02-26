// public d27e40366e85f2183a92e44a0e5de1c3
// private 4798e563144bef70356769014e04015c4e9a91a5

// md5(`${timestamp}${private}${public}`)
// https://gateway.marvel.com/v1/public/characters?apikey=d27e40366e85f2183a92e44a0e5de1c3&hash=a2569606843ce4290964120edc22e132&ts=1551200573308&limit=10&offset=0
/* eslint-disable */
import md5 from 'md5';
import qs from 'qs';

const publicKey = 'd27e40366e85f2183a92e44a0e5de1c3';
const privateKey = '4798e563144bef70356769014e04015c4e9a91a5'
const timestamp = new Date().getTime();

const hash = () => md5(`${timestamp}${privateKey}${publicKey}`)

export const get = () => {
  const params = {
    apikey: publicKey,
    hash: hash(),
    ts: timestamp,
    limit: 10,
    offset: 0,
    orderBy: 'name'
  };

  return async dispatch => {
    const url = `https://gateway.marvel.com/v1/public/characters?${qs.stringify(params)}`;
    const res = await fetch(url, { method: 'get' });
    const data = await res.json();
    debugger
    dispatch({
      type: 'GET_CONTENT',
      data: [],
    });
  };
};
