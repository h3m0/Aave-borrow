require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('hardhat-gas-reporter');
require('solidity-coverage');
require('hardhat-deploy');
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  // solidity: "0.8.7",
  solidity: {
    compilers: [
      {version: "0.8.7"},
      {version: "0.6.6"},
      {version: "0.4.11"},
      {version: "0.4.24"},
      {version: "0.4.8"},
      {version: "0.4.0"},  
      {version: "0.6.12"},
      {version: "0.5.16"}
    ]
  },
  etherscan: {
    apiKey: {
      rinkeby: "2YSAPKE9XCGGAI35QYQ34M1XQ9YC5E1F48"
    }
  },
  gasReporter: {
    enabled: false,
    OutputFile: "gasreport.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API
  },
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: 'http://127.0.0.1:8545',
      chainId: 1337,
      accounts: [process.env.FAKE_PRIVATE_KEY1, process.env.FAKE_PRIVATE_KEY2]
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/975b87e662844faca559e5363cd87512',
      chainId: 5,
      accounts: [process.env.REAL_PRIVATE_KEY],
      ethUsdPricefeed: process.env.GOERLI_ADDR,
      blockConfirmations: 6,
      vrf: '0x2bce784e69d2Ff36c71edcB9F88358dB0DfB55b4',
      link: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
      daiEthPriceFeed: '0x0d79df66BE487753B02D015Fb622DED7f0E9798d'
    },
    rinkeby: {
      url: 'https://eth-rinkeby.g.alchemy.com/v2/aiPzcm4j5RM2kQUFPqqZfMSVxI4RI1CI',
      chainId: 4,
      accounts: [process.env.REAL_PRIVATE_KEY],
      ethUsdPricefeed: process.env.RINKEBY_ADDR,
      blockConfirmations: 6,
      vrf: '0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B',
      link: '0x01BE23585060835E02B77ef475b0Cc51aA1e0709'
    }
  },
  kovan: {
    url: 'https://kovan.infura.io/v3/975b87e662844faca559e5363cd87512',
    chainId: 42,
    accounts: [process.env.REAL_PRIVATE_KEY],
    blockConfirmations: 6   
  },
  namedAccounts: {
      deployer: {
        1337: 0,
        4: 0,
        42: 0,
        5: 0
      },
      tester: {
          1337: 1
      }
  }
};
