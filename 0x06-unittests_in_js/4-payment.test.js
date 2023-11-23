const sinon = require('sinon')
const Utils = require('./utils')
const { assert } = require('chai')
const { expect } = require('chai')
const sendPaymentRequestToApi = require('./4-payment')

describe('sendPaymentRequestToApi', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10)
    const spysendPaymentAPI = sinon.spy(console, 'log')
    it('Should track payment calls and behaviors', () => {
       sendPaymentRequestToApi(100, 20)

       assert(stubUtils.calledOnceWithExactly('SUM', 100, 20))
    })
    it('should verify that `The total is: 10` is logged to the console', ()=>{
        expect(spysendPaymentAPI.calledOnceWithExactly('The total is: 10')).to.be.true;
        stubUtils.restore() 
    })
})
