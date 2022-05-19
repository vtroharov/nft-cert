export const createNft = ({name, description, external_url}, image, animation) => {
    return {
        image: image,
        ...(animation ? {animation_url: animation} : null),
        name,
        description,
        external_url
    }
}

export const createContract = (image, {
    name,
    description,
    external_link,
    seller_fee_basis_points,
    fee_recipient
}) => {
    return {
        image,
        name,
        description,
        external_link,
        seller_fee_basis_points,
        fee_recipient
    }
}
