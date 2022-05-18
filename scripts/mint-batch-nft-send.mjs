export const mintToAddressBatch = async function (ethers, {address, wallet}, meta, royalty) {
    await ethers.attach(address).mintToAddressBatch(wallet, meta, royalty.fee_recipient, royalty.seller_fee_basis_points)
    return wallet;
}
