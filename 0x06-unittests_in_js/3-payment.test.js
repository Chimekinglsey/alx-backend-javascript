const sinon = require('sinon')
const Utils = require('./utils')
const { assert } = require('chai')
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber')
    it('Should track payment calls and behaviors', () => {
       sendPaymentRequestToApi(100, 20)
       assert(spyUtils.calledOnceWithExactly('SUM', 100, 20))
       spyUtils.restore()
    })
})
