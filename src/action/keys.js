import md5 from 'md5';

const privateKey = '4798e563144bef70356769014e04015c4e9a91a5';

export const timestamp = new Date().getTime();
export const publicKey = 'd27e40366e85f2183a92e44a0e5de1c3';
export const hash = md5(`${timestamp}${privateKey}${publicKey}`);
