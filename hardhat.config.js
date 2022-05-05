require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

const {
  ETHEREUM_API_URL,
  ROPSTEN_API_URL,
  RINKENBY_API_URL,
  POLYGON_API_URL,
  MUMBAI_API_URL,
  } = process.env;

const {
  PRIVATE_KEY
} = process.env;

module.exports = {
  solidity: "0.8.6",

  defaultNetwork: "ropsten",

  networks: {
    hardhat: {},
    PolygonMumbai: {
      url: MUMBAI_API_URL,
      accounts: [PRIVATE_KEY]
    },
    Polygon: {
      url: POLYGON_API_URL,
      accounts: [PRIVATE_KEY]
    },
    rinkenby: {
      url: RINKENBY_API_URL,
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
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
