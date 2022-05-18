import {NFTStorage} from 'nft.storage';
import {createAlchemyWeb3} from "@alch/alchemy-web3";
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import hardhat from 'hardhat';
import dotenv from 'dotenv';
import fs from 'fs/promises';

import {mintToAddressBatch} from "./scripts/mint-batch-nft-send.mjs";
import {mintNft} from "./scripts/mint-nft-send.mjs";
import {verifyNft} from "./scripts/verify-nfts.mjs";
import {deploy} from "./scripts/deploy";

function setup() {
    dotenv.config();

    const {
        CONTRACT_NAME,
        CONTRACT_ADDRESS,
        MINT_TO_WALLET,
        CONTRACT_META,
        NFT_STORAGE_API_KEY,
        NETWORK_API_URL
    } = process.env;

    const nftStorageClient = new NFTStorage({token: NFT_STORAGE_API_KEY});
    const web3Client = createAlchemyWeb3(NETWORK_API_URL);

    const contractDetails = {
        name: CONTRACT_NAME,
        address: CONTRACT_ADDRESS,
        wallet: MINT_TO_WALLET,
        metadata: CONTRACT_META
    }

    return {nftStorageClient, web3Client, contractDetails};
}

async function readFile(path) {
    return await fs.readFile(path)
}

async function writeFile(path, data) {
    return await fs.writeFile(path, data)
}

async function main() {

    const filePath = {
        assetsContract: './assets_contract.json',
        metadataUri: './meta_uri.json',
        assets: './assets.json'
    }

    const argv = yargs(hideBin(process.argv)).argv;
    const {nftStorageClient, web3Client, contractDetails} = setup();

    const etherContract = await hardhat.ethers.getContractFactory(contractDetails.name)
    const deploy1 = await deploy(etherContract)
    const mintToAddressBatch1 = mintToAddressBatch(etherContract, contractDetails, metadata, royalty);

    const metadata = JSON.parse(await readFile(filePath.metadataUri))
    const royalty = JSON.parse(await readFile(filePath.assetsContract))

    const resultMetadata = mintNft(etherContract, contractDetails, metadata, royalty);
    await writeFile(filePath.metadataUri, JSON.stringify(resultMetadata))

    const assets = JSON.parse(await readFile(filePath.assets))
    const verifyNft1 = verifyNft(web3Client, contractDetails, assets);
}

main()