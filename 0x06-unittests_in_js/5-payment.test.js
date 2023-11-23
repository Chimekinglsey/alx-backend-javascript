const sendPaymentRequestToAPI = require('./5-payment')
const sinon = require('sinon')
const { expect } = require('chai')


describe('sendPaymentRequestToAPI', () => {
    let spyConsole;
    beforeEach(()=> {
        spyConsole = sinon.spy(console, 'log')
    })
    afterEach(()=>{
        spyConsole.restore()
    })
    it('Verify that sendPaymentRequestToAPI is called once with exact args', () =>{
        sendPaymentRequestToAPI(100, 20)

        expect(spyConsole.calledWithExactly(`The total is: 120`)).to.be.true
        expect(spyConsole.calledOnce).to.be.true  
    })
    it('Verify that `The total is: 20` is logged to the console', () => {
        sendPaymentRequestToAPI(10, 10)

        expect(spyConsole.calledOnce).to.be.true;
        expect(spyConsole.calledWithExactly(`The total is: 20`)).to.be.true
    })
})