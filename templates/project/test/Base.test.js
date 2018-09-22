/* eslint-env node, mocha */
/* global artifacts, contract, it, assert */

const truffleAssert = require('truffle-assertions');

const _project_placeholder_ = artifacts.require('_project_placeholder_');

contract('_project_placeholder_', (accounts) => {
  let instance;

  beforeEach(async () => {
    instance = await _project_placeholder_.deployed();
  });

  it('Should set the number', async () => {
    // given
    const newNumber = 2;

    // when
    const result = await instance.setNumber(newNumber);

    // then
    truffleAssert.eventEmitted(result, 'Set', ev => ev.number.toNumber() === newNumber);
  });

  it('Should get the number', async () => {
    // given
    const expectedNumber = 2;

    // when
    const number = await instance.getNumber();

    // then
    assert.equal(number.toNumber(), expectedNumber, 'Number is wrong!');
  });
});
