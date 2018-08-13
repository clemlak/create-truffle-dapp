# Create Truffle Dapp
Create Truffle Dapp is a small CLI created to help create and configure Truffle projects. The CLI will:

 - Create a project, with a simple contract, a test file and migrations files
 - Create a ready-to-use configuration file using an [Infura](https://infura.io/) API key and a mnemonic

Create Truffle Dapp should work on Windows, Macos and Linux. Please open an issue if something doesn't work.

## Before you begin
First of all, please be sure to have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm) and [Truffle](https://github.com/trufflesuite/truffle) installed on your computer.

## Install

    npm install -g create-truffle-dapp

## Usage
To create a new project:

    create-truffle-dapp MyDapp

Create Truffle Dapp will ask you if you want to set an Infura API key, a mnemonic and if you want to use a Solidity linter.

Then you will be able to run `truffle test`, `truffle compile` and `truffle migrate` to test, compile and deploy your contracts.
