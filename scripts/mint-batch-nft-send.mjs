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

async function mintToAddressBatch(contractAddress) {
   const ContractSend = await ethers.getContractFactory(CONTRACT_NAME)
   await ContractSend.attach(contractAddress).mintToAddressBatch(MINT_TO_WALLET, meta, royalty.fee_recipient, royalty.seller_fee_basis_points)
   console.log("NFT Batch minted to: ", MINT_TO_WALLET)
}

mintToAddressBatch(CONTRACT_ADDRESS)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });