import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import hardhat from 'hardhat';

import {mintToAddressBatch} from "./scripts/mint-batch-nft-send.mjs";
import {mintNft} from "./scripts/mint-nft-send.mjs";
import {verifyNft} from "./scripts/verify-nfts.mjs";
import {deploy} from "./scripts/deploy";
import {store} from "./scripts/store-assets.mjs";
import {readFile} from "./scripts/helpers/file-handler";
import {writeFile} from "./scripts/helpers/file-handler";
import {jsonParser} from "./scripts/helpers/json-parser";
import {setup} from "./scripts/helpers/project-setup";

async function main() {

    setup()

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

    const metadata = jsonParser(await readFile(filePath.metadataUri))
    const royalty = jsonParser(await readFile(filePath.assetsContract))

    const resultMetadata = mintNft(etherContract, contractDetails, metadata, royalty);
    await writeFile(filePath.metadataUri, JSON.stringify(resultMetadata))

    const assets = jsonParser(await readFile(filePath.assets))
    const verifyNft1 = verifyNft(web3Client, contractDetails, assets);

    await store(nftStorageClient, nft)
}

main()