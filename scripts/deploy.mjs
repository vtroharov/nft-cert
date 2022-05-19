export const deploy = async function (token) {
    const nft = await token.deploy()
    await nft.deployed()
    return nft.address
}
