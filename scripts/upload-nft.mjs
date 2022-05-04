import {NFTStorage, File, Blob} from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
import mime from 'mime'
import path from 'path'

import util from 'util'

dotenv.config()

const API_KEY = process.env.NFT_STORAGE_API_KEY

const client = new NFTStorage({token: API_KEY})

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), {type})
}

async function blobFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new Blob([content], {type})
}

async function uploadAsset(filePath) {
    const file = await blobFromPath(filePath)
    return client.storeBlob(file)
}

async function storeAsset(filePath, imagePath) {
    const image = await fileFromPath(imagePath)
    const file = await fileFromPath(filePath)
    const metadata = await client.store({
        name: 'hhhhhhhhhheeeeeeeeey',
        description: 'descriiiiiiiiiiiibe',
        image: image,
        animation_url: file
    })
    console.dir(metadata)
    console.log(metadata.url)
    console.log(metadata.embed())
    console.log(util.inspect(metadata.data))
}

async function createMetadata(tokenUri) {
    return {

    }
}

// async function storeAsset(uri, imagePath, name, description) {
//     const image = await imageFromPath(imagePath)
//     const metadata = await client.store({
//         name,
//         description,
//         animation_url: `ipfs://${uri}`,
//         image,
//     })
//     console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
// }

// uploadAsset("/Users/cheze/Downloads/dance_dance.mp4")
//     .then(result => storeAsset("/Users/cheze/Downloads/dance_dance.mp4", "/Users/cheze/KOS-MOS_Portrait.png", "test", "Mmmmmm")
//         .then(() => process.exit(0))
//         .catch((error) => {
//             console.error(error);
//             process.exit(1);
//         }))

// uploadAsset("assets/dance_dance.mp4")
//     .then(result => console.log(result))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     })

storeAsset("assets/dance_dance.mp4", "assets/KOS-MOS_Portrait.png")
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })