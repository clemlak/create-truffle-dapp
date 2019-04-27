require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const Utils = require('web3-utils');

const mainnetUrl = `https://mainnet.infura.io/v3/${process.env.INFURA}`;
const ropstenUrl = `https://ropsten.infura.io/v3/${process.env.INFURA}`;
const rinkebyUrl = `https://rinkeby.infura.io/v3/${process.env.INFURA}`;
const kovanUrl = `https://kovan.infura.io/v3/${process.env.INFURA}`;
const goerliUrl = `https://goerli.infura.io/v3/${process.env.INFURA}`;
const poaUrl = 'http://poa.network';
const sokolUrl = 'http://sokol.poa.network';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 4000000,
      gasPrice: Utils.toWei('2', 'gwei'),
    },
    ropsten: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, ropstenUrl, 0);
      },
      network_id: 3,
      gasPrice: Utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, rinkebyUrl, 0);
      },
      network_id: 4,
      gasPrice: Utils.toWei('2', 'gwei'),
      gas: 7000000,
    },
    kovan: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, kovanUrl, 0);
      },
      network_id: 42,
      gasPrice: Utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
    goerli: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, goerliUrl, 0);
      },
      network_id: '*',
      gasPrice: Utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
    sokol: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, sokolUrl, 0);
      },
      network_id: '*',
      gasPrice: Utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
    poa: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, poaUrl, 0);
      },
      network_id: '*',
      gasPrice: Utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
    live: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, mainnetUrl, 0);
      },
      network_id: 1,
      gasPrice: Utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
  },
  mocha: {
    useColors: true,
  },
  compilers: {
    solc: {
      version: '0.5.7',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
