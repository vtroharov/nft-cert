import {File} from "nft.storage";

export const nftFile = ({file, name, mimeType}) => new File(file, name, {type: mimeType})