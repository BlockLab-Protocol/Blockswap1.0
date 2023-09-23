require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: {
    version: '0.7.6', 
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
      },
    },
  },
  networks: {
    
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/9iAmNcUrXGEWP3e8BLjat6ff3RYkuKck",
        accounts: [

        ],
      }, 

    },
  },
  
  paths: {
    sources: './contracts', // Directory containing your Solidity contracts
    tests: './test', // Directory containing your tests
    cache: './cache', // Directory for Hardhat's cache
    artifacts: './artifacts', // Directory for contract artifacts
  },
  mocha: {
    timeout: 20000, // Increase the timeout for tests (in milliseconds)
  },
};
