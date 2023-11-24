const request = require('request');
const { expect } = require('chai');

describe('aPI integration test', () => {
  const url = 'http://localhost:7865/cart';
  it('should return 200 status code', (done) => {
    request(`${url}/12`, (error, resp) => {
      expect(resp.statusCode).to.be.equal(200);
      done();
    });
  })

  it('should print response body', (done) => {
    request(`${url}/12`, (error, res, body) => {
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
    });
  })

  it('should print 404', (done) => {
    request(`${url}/NaN`, (error, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
    });
  })

  it('gET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${url}/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  })

  it('gET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${url}-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  })

  it('gET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${url}/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  })
});
