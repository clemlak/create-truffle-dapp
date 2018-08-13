/* eslint-env node */
/* global artifacts */

const Migrations = artifacts.require('./Migrations.sol');

function deployContracts(deployer) {
  deployer.deploy(Migrations);
}

module.exports = deployContracts;
