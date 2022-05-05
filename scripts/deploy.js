async function main() {
    const MyToken = await ethers.getContractFactory("MyToken")
    
    // Start deployment, returning a promise that resolves to a contract object
    const nft = await MyToken.deploy()
    await nft.deployed()
    console.log("Contract deployed to address:", nft.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
