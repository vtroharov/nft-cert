const CONTRACT_ADDRESS = "0x30F874B10a055b7fbC8fefbE7fB26109b19907A6"
const META_DATA_URL = "ipfs://bafyreicojgw4jufgokscocvf2fwnf5qzq5edift53ytqovqnp4dc2hwyvu/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const MyToken = await ethers.getContractFactory("MyToken")
   const to = "0x3faa320cd767e845d56909789ed4ba0a7dc1d405"
   await MyToken.attach(contractAddress).safeMint(to, metaDataURL)
   console.log("NFT minted to: ", to)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });