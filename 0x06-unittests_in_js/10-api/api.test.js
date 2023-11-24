const request = require('request')
const { assert } = require('chai')

describe('Index page', () => {
    it('should return 200 status code', (done) =>{
        request('http://localhost:7865/cart/12', (error, resp) =>{
            if (!error)
            assert.equal(resp.statusCode, 200)
            else done(error)
            done()
        })
    });

    it('Should print response body', (done) => {
        request('http://localhost:7865/cart/12', (error, res, body)=>{
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
        request('http://localhost:7865/cart/NaN', (error, res)=>{
            if (error){
                done(error)
            }
            else  {
                assert.equal(res.statusCode, 404)
                done()
            }
        })
    })

})