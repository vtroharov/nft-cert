const CONTRACT_ADDRESS = "<$SmartContract Address HASH>"
const META_DATA_URL = "ipfs://metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const ContractSend = await ethers.getContractFactory("<$ContractName>")
   const to = "<$Receiver>"
   await ContractSend.attach(contractAddress).safeMint(to, metaDataURL, "<$Royalty Receiver>", $Royalty_Amount)
   console.log("NFT minted to: ", to)
   console.log(META_DATA_URL);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });