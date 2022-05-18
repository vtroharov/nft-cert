import { File } from 'nft.storage';
import fs from 'fs';
import mime from 'mime';

const DIR = "./assets/"

let rawdata = fs.readFileSync('./assets_contract.json');
let assets = JSON.parse(rawdata);

export const storeAsset =  async function (client) {
    // Upload contract metadata from assets_contract.json file and media files in assets for Openseas usage
    const filePath = DIR.concat(assets.image);
    const nft = {
      image: new File(
        [await fs.promises.readFile(filePath)],
        assets.image,
        { type: mime.getType(filePath) }
      ),
      name: assets.name,
      description: assets.description,
      external_link: assets.external_link,
      seller_fee_basis_points: assets.seller_fee_basis_points,
      fee_recipient: assets.fee_recipient
    }
    const metadata = await client.store(nft)
    console.log(metadata.url)
}
