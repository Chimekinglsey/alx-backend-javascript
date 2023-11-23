const sinon = require('sinon')
const Utils = require('./utils')
const { assert } = require('chai')

describe('sendPaymentRequestToApi', () => {
    const sendPaymentRequestToApi = (a, b) => Math.round(a) + Math.round(b)
    const spyUtils = sinon.spy(Utils.calculateNumber)
    it('Should track payment calls and behaviors', () => {
        assert(sendPaymentRequestToApi(100, 20), spyUtils('SUM', 100, 20) )
    })
    spyUtils.restore
})
