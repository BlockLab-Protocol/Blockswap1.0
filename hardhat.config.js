require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
    },
  paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
    },
    mocha: {
      timeout: 40000
    },

  nextwork: {
    localhost: {
      url: "http://127.0.0.1:8545",
      gas: 6000000,
    },
    // hardhat: {
    //   forking: {
    //     url: "https://eth-mainnet.g.alchemy.com/v2/3SAmNcUrXGEWP3e8BLjat6ff3RYkuKck"
    //   } 

    // }
  }
};
