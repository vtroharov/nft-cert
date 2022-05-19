export const deploy = async function (token) {
    const nft = await token.deploy()
    await nft.deployed()
    console.log(nft.address)
}
