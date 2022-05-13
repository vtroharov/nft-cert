require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();

const { NETWORK_API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.6",

  defaultNetwork: "rinkenby",

  networks: {
    hardhat: {},
    PolygonMumbai: {
      url: NETWORK_API_URL,
      accounts: [PRIVATE_KEY]
    },
    Polygon: {
      url: NETWORK_API_URL,
      accounts: [PRIVATE_KEY]
    },
    rinkenby: {
      url: NETWORK_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    ropsten: {
      url: NETWORK_API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: NETWORK_API_URL,
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
