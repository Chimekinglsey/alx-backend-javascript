const expect = require('expect');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return payload when `success` is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).toStrictEqual({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  }));
  it('should return false', () => new Promise((done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        expect(result).toBeFalsy();
        done();
      })
      .catch((error) =>{
        console.log(error)
        done()
      });
  }));
});
