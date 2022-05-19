require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();

const {
  ETHEREUM_API_URL,
  ROPSTEN_API_URL,
  RINKEBY_API_URL,
  POLYGON_API_URL,
  MUMBAI_API_URL,
  ETHERSCAN_API_KEY,
  PRIVATE_KEY
} = process.env;

module.exports = {
  solidity: "0.8.6",

  defaultNetwork: "rinkeby",

  networks: {
    hardhat: {},
    mumbai: {
      url: MUMBAI_API_URL,
      accounts: [PRIVATE_KEY]
    },
    polygon: {
      url: POLYGON_API_URL,
      accounts: [PRIVATE_KEY]
    },
    rinkeby: {
      url: RINKEBY_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    ropsten: {
      url: ROPSTEN_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: ETHEREUM_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
