export const mintNft = async function (ethers, {name, wallet, address}, meta, royalty) {
    await ethers.attach(address).safeMint(wallet, meta[0].meta, royalty.fee_recipient, royalty.seller_fee_basis_points)
    return meta.slice(1);
}
