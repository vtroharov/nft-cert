require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

const {
  ETHEREUM_API_URL,
  ROPSTEN_API_URL,
  RINKENBY_API_URL,
  POLYGON_API_URL,
  MUMBAI_API_KEY,
  } = process.env;

const {
  ETHEREUM_PRIVATE_KEY,
  ROPSTEN_PRIVATE_KEY,
  RINKENBY_PRIVATE_KEY,
  POLYGON_PRIVATE_KEY,
  MUMBAI_PRIVATE_KEY
} = process.env;

module.exports = {
  solidity: "0.8.6",

  defaultNetwork: "ropsten",

  networks: {
    hardhat: {},
    PolygonMumbai: {
      url: MUMBAI_API_KEY,
      accounts: [MUMBAI_PRIVATE_KEY]
    },
    Polygon: {
      url: POLYGON_API_URL,
      accounts: [POLYGON_PRIVATE_KEY]
    },
    rinkenby: {
      url: RINKENBY_API_URL,
      accounts: [`0x${RINKENBY_PRIVATE_KEY}`]
    },
    ropsten: {
      url: ROPSTEN_API_URL,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },
    mainnet: {
      url: ETHEREUM_API_URL,
      accounts: [`0x${ETHEREUM_PRIVATE_KEY}`]
    }
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
