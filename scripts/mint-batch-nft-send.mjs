const CONTRACT_ADDRESS = "<$SmartContract Address HASH>"

async function mintToAddressBatch(contractAddress) {
   const metas = ["Array of METADATA"]
   const ContractSend = await ethers.getContractFactory("<$ContractName>")
   const to = "<$Receiver>"
   await ContractSend.attach(contractAddress).mintToAddressBatch(to, metas, "<$Royalty Receiver>", $Royalty_Amount)
   console.log("NFT minted to: ", to)
}

mintToAddressBatch(CONTRACT_ADDRESS)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });