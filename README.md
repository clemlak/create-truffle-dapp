# Create Truffle Dapp

## Introduction

The goal of Create Truffle Dapp is to allow developers to create and deploy Truffle projects with no configuration. Create Truffle Dapp will:

 - Create your Truffle project, with a template contract, a test file and the corresponding migrations files
 - Create a ready-to-use deployment file using your [Infura](https://infura.io/) API key and a mnemonic (soon to be updated to Infura projects)

*A Solidity linter ([Solhint](https://github.com/protofire/solhint) or [Solium](https://github.com/duaraghav8/Solium)) configuration file can also be created.*

Create Truffle Dapp should work on Windows, Macos and Linux. Please [open an issue](https://github.com/clemlak/create-truffle-dapp/issues/new) if something doesn't work.

## Before you begin
First of all, please be sure to have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm) and [Truffle](https://github.com/trufflesuite/truffle) installed on your computer. You may also need linters, such as [Solhint](https://github.com/protofire/solhint), [Solium](https://github.com/duaraghav8/Solium) or [ESLint](https://eslint.org/).

## Install

Install Create Truffle Dapp globally with:

    npm install -g create-truffle-dapp

*Some users may need to start this command with `sudo` and enter their password.*

## Usage
To create a new project in the current directory, simply run:

    create-truffle-dapp MyDapp

Create Truffle Dapp will then ask you if you want to set an Infura API key, a mnemonic and if you want to use a Solidity linter. All of these steps are optional and you will be able to change or install things later.

Once the installation is done, you can open your project with:

```
cd MyDapp
```

Then you will be able to run any commands like `npm install openzeppelin-solidity`, `truffle test`, `truffle compile`.

Once you are done with your code, simply run `truffle migrate --network rinkeby` (or any network) to deploy it!

*Warning: Please double-check the gas amount and the gas price in the `truffle.js` file before any deployment!*


## Beta

Beta version may be installed using:

```
npm install -g create-truffle-dapp@beta
```

Some possible future features will be:
* Migration to Truffle 5
* Migration to Solidity 0.5.0
* Vyper support
* Migration to the new Infura API access
* Automatic custom Ganache ianstance
* Preconfigured projects?
* Solidity flattener
* Solidity docs generator

## Contribute

If you want to add something to Create Truffle Dapp, don't hesitate to [create a new issue](https://github.com/clemlak/create-truffle-dapp/issues/new)!

## License

Create Truffle Dapp is an open source software [licensed as MIT](https://github.com/clemlak/create-truffle-dapp/blob/master/LICENSE).
