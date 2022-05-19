import dotenv from "dotenv";
import {NFTStorage} from "nft.storage";
import {createAlchemyWeb3} from "@alch/alchemy-web3";

export const setup = () => {
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
