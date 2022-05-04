async function main() {
    const Nft = await ethers.getContractFactory("XcNFT")

    // Start deployment, returning a promise that resolves to a contract object
    const nft = await Nft.deploy()
    await nft.deployed()
    console.log("Contract deployed to address:", nft.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })