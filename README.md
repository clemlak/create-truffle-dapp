# Create Truffle Dapp

## Introduction

The goal of Create Truffle Dapp is to help developers create and deploy Truffle projects with no configuration. Create Truffle Dapp will:

 - Create your Truffle project, with a template contract, a test file and the corresponding migrations files
 - Create a ready-to-use deployment file using your [Infura](https://infura.io/) project ID and a wallet mnemonic
 - Also, a Solidity linter (such as [Solhint](https://github.com/protofire/solhint) or [Solium](https://github.com/duaraghav8/Solium)) configuration file can also be created.

Create Truffle Dapp should work on Windows, Macos and Linux. Please [open an issue](https://github.com/clemlak/create-truffle-dapp/issues/new) if something doesn't work.

## Before you begin
First of all, please be sure to have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm) and [Truffle](https://github.com/trufflesuite/truffle) installed on your computer. You may also need linters, such as [Solhint](https://github.com/protofire/solhint), [Solium](https://github.com/duaraghav8/Solium) or [ESLint](https://eslint.org/).

## Install

Install Create Truffle Dapp globally with:

    npm install -g create-truffle-dapp

*Some users (using macOS) may need to start this command with `sudo` and enter their password.*

## Usage
To create a new project in the current directory, launch your terminal and run:

    create-truffle-dapp MyDapp

Create Truffle Dapp will then ask you if you want to set an Infura project ID, a mnemonic and if you want to use a Solidity linter. All of these steps are optional and you will be able to change or install things later.

Once the installation is done, you can open your project with:

```
cd MyDapp
```

Then, you will be able to run any command like `npm install openzeppelin-solidity`, `truffle test` or `truffle compile`.

Once you are done with your code, simply run `truffle migrate --network rinkeby` (or any network) to deploy your dapp! Currently, gateways for Ropsten, Rinkeby, Goerli, Mainnet, Poa and Sokol are already implemented!

*Warning: Please always double-check the gas amount and the gas price in the `truffle.js` file before any deployment!*

## Contribute

If you want to contribute, don't hesitate to [create a new issue](https://github.com/clemlak/create-truffle-dapp/issues/new)!

## License

Create Truffle Dapp is an open source software [licensed as MIT](https://github.com/clemlak/create-truffle-dapp/blob/master/LICENSE).
