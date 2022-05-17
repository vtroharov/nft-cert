import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

let rawdata_meta = fs.readFileSync('./meta_uri.json');
let rawdata_royalty = fs.readFileSync('./assets_contract.json');
let meta = JSON.parse(rawdata_meta);
let royalty = JSON.parse(rawdata_royalty);

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const CONTRACT_NAME = process.env.CONTRACT_NAME
const MINT_TO_WALLET = process.env.MINT_TO_WALLET
const META_DATA_URL = meta[0].meta

async function mintNFT(contractAddress, metaDataURL) {
      const ContractSend = await ethers.getContractFactory(CONTRACT_NAME)
      await ContractSend.attach(contractAddress).safeMint(MINT_TO_WALLET, metaDataURL, royalty.fee_recipient, royalty.seller_fee_basis_points)
      meta.shift();
      fs.writeFile ("meta_uri.json", JSON.stringify(meta), function(err) {
            if (err) throw err;
      })
      console.log("NFT minted!", meta.length, "NFTs left to mint.")
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
.catch((error) => {
      console.error(error);
      process.exit(1);
});