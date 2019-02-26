// question 1: remove vowels out of string
const str = str => str.replace(/[aeiou]/gi, '');

// question 2: make code better
const sql = require('mssql');
const connectionString = 'some-cnn-string';
const query1 = 'some-query-1';
const query2 = 'some-query-2';
const query3 = 'some-query-3';

const callback = async data => {
  const result = await new Promise(resolve => {
    resolve(data)
  });
  return result;
};

module.exports = {
  getAccountId: async function (apiKey, cb) {
    const connect = await sql.connect(connectionString, callback);

    const result1 = await connect.query(query1, callback);

    const result2 = await connect.query(query2, { ...result1 }, callback);

    const result3 = await connect.query(query3, { ...result2 }, callback);

    cb(result3);
  }
};
