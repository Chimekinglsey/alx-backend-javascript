const request = require('request');
const { expect } = require('chai');

describe('aPI integration test', () => {
  const url = 'http://localhost:7865/cart';
  it('should return 200 status code', () => new Promise((done) => {
    request(`${url}/12`, (error, resp) => {
      if (!error) expect(resp.statusCode).to.be.equal(200);
      else done(error);
      done();
    });
  }));

  it('should print response body', () => new Promise((done) => {
    request(`${url}/12`, (error, res, body) => {
      if (error) {
        done(error);
      } else {
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      }
    });
  }));

  it('should print 404', () => new Promise((done) => {
    request(`${url}/NaN`, (error, res) => {
      if (error) {
        done(error);
      } else {
        expect(res.statusCode).to.be.equal(404);
        done();
      }
    });
  }));

  it('gET /cart/:id returns correct response for valid :id', () => new Promise((done) => {
    request.get(`${url}/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  }));

  it('gET /cart/:id returns 404 response for negative number values in :id', () => new Promise((done) => {
    request.get(`${url}-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));

  it('gET /cart/:id returns 404 response for non-numeric values in :id', () => new Promise((done) => {
    request.get(`${url}/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
});
