export const mintNft = async function (ethers, {name, wallet, address}, meta, royalty) {
    await ethers.attach(address).safeMint(wallet, meta, royalty.fee_recipient, royalty.seller_fee_basis_points)
    return wallet;
}

export const mintToAddressBatch = async function (ethers, {address, wallet}, meta, royalty) {
    await ethers.attach(address).mintToAddressBatch(wallet, meta, royalty.fee_recipient, royalty.seller_fee_basis_points)
    return wallet;
}
