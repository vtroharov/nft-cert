import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import hardhat from 'hardhat';

import {mintNft, mintToAddressBatch} from "./scripts/mint-nft-send.mjs";
import {verifyNft} from "./scripts/verify-nfts.mjs";
import {deploy} from "./scripts/deploy.mjs";
import {store} from "./scripts/store-assets.mjs";
import {readFile} from "./scripts/helpers/file-handler.mjs";
import {jsonParser} from "./scripts/helpers/json-parser.mjs";
import {setup} from "./scripts/helpers/project-setup.mjs";

async function main() {
    const filePath = {
        assetsContract: './assets_contract.json',
        metadataUri: './meta_uri.json',
        assets: './assets.json'
    }

    const argv = yargs(hideBin(process.argv)).argv;
    const {nftStorageClient, web3Client, contractDetails} = setup(hardhat.config.networks);

    const etherContract = await hardhat.ethers.getContractFactory(contractDetails.name)
    const contractAddress = await deploy(etherContract)

    const metadata = jsonParser(await readFile(filePath.metadataUri))
    const royalty = jsonParser(await readFile(filePath.assetsContract))

    const wallet = mintToAddressBatch(etherContract, contractDetails, metadata, royalty);
    const resultMetadata = mintNft(etherContract, contractDetails, metadata, royalty);

    const assets = jsonParser(await readFile(filePath.assets))
    const verifyNft1 = verifyNft(web3Client, contractDetails, assets);

    await store(nftStorageClient, nft)
}

main()
