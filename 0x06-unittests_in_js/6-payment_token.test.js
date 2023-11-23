const { expect } = require('chai');
const chai = require("chai");
chai.use(require("chai-as-promised"));

const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', () => {
    it('Should return payload when `success` is true', () => {
        expect(getPaymentTokenFromAPI(true)).to.eventually.equal({data: 'Successful response from the API' })
    })
    it('Should not return payload when `success` is false', () => {
        expect(getPaymentTokenFromAPI(false)).to.eventually.be.false
    })
    it('Should not return false when success is not true', () => {
        expect(getPaymentTokenFromAPI(false)).to.eventually.be.false
    })
})