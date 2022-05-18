// Log Metrics using Alchemy API
function printContract(nfts, assets, address) {
    const totalNfts = nfts.ownedNfts.filter(nft => nft.contract.address === address.toLowerCase()).length
    const minted = nfts.ownedNfts.filter(nft => nft.tokenUri.raw === assets[nft.tokenUri.raw])
    return {totalNfts, minted}
}

function printWallet(nfts, totalNfts) {
    console.log("==================================================================================================")
    console.log("NFTs Minted in Wallet:");
    nfts.minted.forEach(mintNft => {
        console.log(mintNft)
    })
    for (let i = 0; i < nfts.minted.length; i++) {
        // console.log("Successfully Minted:", minted[i][0], "-", minted[i][1])
    }
    console.log("==================================================================================================")
    console.log("Total NFTs in wallet:", nfts.totalCount);
    console.log("Total NFTs in contract:", totalNfts);
}

export const verifyNft = async function(web3Client, {address, wallet}, assets) {
    const nfts = await web3Client.alchemy.getNfts({owner: wallet})
    const assetsMap = assets.reduce((map, asset) => {
        map[asset.meta] = asset.meta
    })
    const {totalNfts, minted} = printContract(nfts, assetsMap, address)
    printWallet(minted, totalNfts)
    return nfts
}
