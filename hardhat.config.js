require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");

module.exports = {

  solidity: "0.8.6",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.MAIN_ACCOUNTS],
      chainId: 80001,
    },
    // etherscan: {
    //   apiKey: {
    //     goerli: process.env.ETHERSCAN_API_KEY,
    //   },
    // },
  },
  gasReporter: {
    enabled: true,
    currency: "INR",
    coinmarketcap: process.env.COINMARKETCAP,
    token: "matic",
    outputFile: "gasReports.txt",
    noColors: true
  }
}