import {File} from "nft.storage";

export const createNft = ({name, description, external_url}, {imageFile, imageFileName, imageFileType}, animation) => {
    return {
        image: new File(
            imageFile,
            imageFileName,
            {type: imageFileType}
        ),
        ...(animation ? {
            animation_url: new File(
                animation.file,
                animation.fileName,
                {type: animation.fileType}
            )
        } : null),
        name,
        description,
        external_url
    }
}

export const createContract = ({image, imageName, imageType}, {
    name,
    description,
    external_link,
    seller_fee_basis_points,
    fee_recipient
}) => {
    return {
        image: new File(
            image,
            imageName,
            {type: imageType}
        ),
        name,
        description,
        external_link,
        seller_fee_basis_points,
        fee_recipient
    }
}