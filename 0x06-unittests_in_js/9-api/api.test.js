const request = require('request')
const { assert, expect } = require('chai')

describe('Index page', () => {
    const url = 'http://localhost:7865/cart'
    it('should return 200 status code', (done) =>{
        request(`${url}/12`, (error, resp) =>{
            if (!error)
            assert.equal(resp.statusCode, 200)
            else done(error)
            done()
        })
    });

    it('Should print response body', (done) => {
        request(`${url}/12`, (error, res, body)=>{
            if (error){
                done(error)
            }
            else  {
                assert.equal(body, 'Payment methods for cart 12')
                done()
            }
        })
    });

    it('Should print 404', (done) => {
        request(`${url}/NaN`, (error, res)=>{
            if (error){
                done(error)
            }
            else  {
                assert.equal(res.statusCode, 404)
                done()
            }
        })
    })
    
      it('GET /cart/:id returns correct response for valid :id', (done) => {
        request.get(`${url}/47`, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Payment methods for cart 47');
          done();
        });
      });
    
      it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
        request.get(`${url}-47`, (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
      });
    
      it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
        request.get(`${url}/d200-44a5-9de6`, (_err, res, _body) => {
          expect(res.statusCode).to.be.equal(404);
          done();
        });
      });

})