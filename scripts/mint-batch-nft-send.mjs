const CONTRACT_ADDRESS = "0xD6a3b763448b7AdF02FF34ac0d84ce9ea7BfE183"

async function mintToAddressBatch(contractAddress) {
   const metas = ["ipfs://bafyreiaxybjx6xgi3bvgv2l5w2pg6jpxtoebz5esr3lnl37mod2rpghul4/metadata.json","ipfs://bafyreigaipcz5he43bz4l7r7nydobzabpxxnhr6twtgea6cpma45iz723a/metadata.json","ipfs://bafyreifsdnecbxrbnbdrmq3rj5sso5vxgb7xwqqpurvuneo2lknvl7423a/metadata.json","ipfs://bafyreifsdnecbxrbnbdrmq3rj5sso5vxgb7xwqqpurvuneo2lknvl7423a/metadata.json"]
   const ContractSend = await ethers.getContractFactory("NoBurnToken")
   const to = "0x3faa320cd767e845d56909789ed4ba0a7dc1d405"
   await ContractSend.attach(contractAddress).mintToAddressBatch(to, metas, "0x9108B8E8e055e7FE666B492E9199e5aF0d5Be613", 4200)
   console.log("NFT minted to: ", to)
}

mintToAddressBatch(CONTRACT_ADDRESS)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });