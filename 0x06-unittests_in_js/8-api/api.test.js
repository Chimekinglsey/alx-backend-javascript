const request = require('request')
const { assert } = require('chai')

describe('Index page', () => {
    it('should return 200 status code', (done) =>{
        request('http://localhost:7865', (error, resp) =>{
            if (!error)
            assert.equal(resp.statusCode, 200)
            else done(erro)
            done()
        })
    });

    it('Should print response body', (done) => {
        request('http://localhost:7865', (error, res, body)=>{
            if (error){
                done(error)
            }
            else  {
                assert.equal(body, 'Welcome to the payment system')
                done()
            }
        })
    });

    it('Should print hostname', (done) => {
        request('http://localhost:7865', (error, res)=>{
            if (error){
                done(error)
            }
            else  {
                assert.equal(res.request.host, 'localhost')
                done()
            }
        })
    })

})