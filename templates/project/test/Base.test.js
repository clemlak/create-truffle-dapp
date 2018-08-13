/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const _project_placeholder_ = artifacts.require('_project_placeholder_');

let instance;

contract('_project_placeholder_', (accounts) => {
  it('Should deploy an instance of the _contract_placeholder_ contract', () => _project_placeholder_.deployed().then((contractInstance) => {
    instance = contractInstance;
  }));

  it('Should set the number', () => instance.setNumber(2).then(() => {
  }));

  it('Should get the numbre', () => instance.getNumber().then((number) => {
    assert.equal(number.toNumber(), 2, 'Number is wrong!');
  }));
});
