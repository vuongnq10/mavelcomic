// https://gateway.marvel.com/v1/public/characters?apikey=d27e40366e85f2183a92e44a0e5de1c3&hash=a2569606843ce4290964120edc22e132&ts=1551200573308&limit=10&offset=0
/* eslint-disable */
import md5 from 'md5';
import qs from 'qs';

const publicKey = 'd27e40366e85f2183a92e44a0e5de1c3';
const privateKey = '4798e563144bef70356769014e04015c4e9a91a5'
const timestamp = new Date().getTime();

const hash = () => md5(`${timestamp}${privateKey}${publicKey}`)

export const load = () => {
  return async (dispatch, getState) => {
    const { limit, offset, characters } = getState().home;

    const params = {
      apikey: publicKey,
      hash: hash(),
      ts: timestamp,
      orderBy: 'name',
      limit,
      offset,
    };

    const url = `https://gateway.marvel.com/v1/public/characters?${qs.stringify(params)}`;
    const res = await fetch(url, { method: 'get' });
    const data = await res.json();

    dispatch({
      type: 'GET_CONTENT',
      offset: offset + limit,
      data: characters.concat(data.data.results),
    });
  };
};

// https://gateway.marvel.com/v1/public/characters/1011334?apikey=d27e40366e85f2183a92e44a0e5de1c3&hash=3aed0158b35af7c78cde7d9bbf9a57e8&ts=1551276575438
export const get = id => {
  return async dispatch => {
    const params = {
      apikey: publicKey,
      hash: hash(),
      ts: timestamp,
    };

    const url = `https://gateway.marvel.com/v1/public/characters/${id}?${qs.stringify(params)}`;
    const res = await fetch(url, { method: 'get' });
    const data = await res.json();

    dispatch({
      type: 'GET_HERO',
      hero: data.data.results[0],
    });
  }
}
