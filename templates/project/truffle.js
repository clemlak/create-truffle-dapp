require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const mainnetUrl = `https://mainnet.infura.io/v3/${process.env.INFURA}`;
const ropstenUrl = `https://ropsten.infura.io/v3/${process.env.INFURA}`;
const rinkebyUrl = `https://rinkeby.infura.io/v3/${process.env.INFURA}`;
const kovanUrl = `https://kovan.infura.io/v3/${process.env.INFURA}`;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 8000000,
      gasPrice: Web3.utils.toWei('2', 'gwei'),
    },
    ropsten: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, ropstenUrl, 0);
      },
      network_id: 3,
      gasPrice: Web3.utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
    rinkeby: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, rinkebyUrl, 0);
      },
      network_id: 4,
      gasPrice: Web3.utils.toWei('2', 'gwei'),
      gas: 7000000,
    },
    kovan: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, kovanUrl, 0);
      },
      network_id: 42,
      gasPrice: Web3.utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
    live: {
      provider() {
        return new HDWalletProvider(process.env.MNEMONIC, mainnetUrl, 0);
      },
      network_id: 1,
      gasPrice: Web3.utils.toWei('2', 'gwei'),
      gas: 8000000,
    },
  },
  mocha: {
    useColors: true,
  },
  compilers: {
    solc: {
      version: '0.5.0',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
