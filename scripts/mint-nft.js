require("dotenv").config()

const API_URL = process.env.RINKENBY_API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const {createAlchemyWeb3} = require("@alch/alchemy-web3")

const web3 = createAlchemyWeb3(API_URL)

const contract = require("../artifacts/contracts/ContractSend.sol/NoBurnToken.json")

const contractAddress = "0x66E1Bae9Fd8ae124301b70a0C14d8bfF8182F6C7"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

    const gasPrice = await web3.eth.getGasPrice();

    //the transaction
    const tx = {
        'from': PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 50000000,
        'data': nftContract.methods.safeMint(PUBLIC_KEY, tokenURI, "0x9108B8E8e055e7FE666B492E9199e5aF0d5Be613", 4200).encodeABI()
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)

    signPromise
        .then((signedTx) => {
            web3.eth.sendSignedTransaction(
                signedTx.rawTransaction,
                function (err, hash) {
                    if (!err) {
                        console.log(
                            "The hash of your transaction is: ",
                            hash,
                            "\nCheck Alchemy's Mempool to view the status of your transaction!"
                        )
                    } else {
                        console.log(
                            "Something went wrong when submitting your transaction:",
                            err
                        )
                    }
                }
            )
        })
        .catch((err) => {
            console.log(" Promise failed:", err)
        })
}

mintNFT("ipfs://bafyreiddy25bdumhqdcqixp6xodrxcdwysidvb7saehkveqo73dhzrgrti/metadata.json")