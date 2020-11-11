const HDWalletProvider = require('truffle-hdwallet-provider');
//const fs = require('fs');
//const mnemonic = "fs.readFileSync("./.secret").toString().trim();"
const mnemonic = "PUT METAMASK SEED PHRASE HERE"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/8ac6a49fd19f439e91e49d3e025dac2c"),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    }
  }
}
