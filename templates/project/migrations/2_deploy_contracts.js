/* eslint-env node */
/* global artifacts */

const _project_placeholder_ = artifacts.require('_project_placeholder_');

function deployContracts(deployer) {
  deployer.deploy(_project_placeholder_);
}

module.exports = deployContracts;
