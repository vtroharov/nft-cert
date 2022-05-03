import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

async function storeAsset() {
   const client = new NFTStorage({ token: API_KEY })
   const metadata = await client.store({
       name: 'DJScheppert@Rabbits',
       description: 'Michael Scheppert live video playing at Rabbits Eat Lettuce Festival 2021',
       animation_url: 'ipfs://bafybeifyw4k4o5sdbup2v7zyqojpsws5aduq5gownshhq5vesu7zfisxdu',
       image: new File(
           [await fs.promises.readFile('assets/Preview.png')],
           'Preview.png',
           { type: 'image/png' }
       ),
   })
   console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

storeAsset()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });