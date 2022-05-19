# Spearmint
BlockTrust project to deploy and verify contracts and mint NFTs

## Setting up the project

1. Clone the repository
`git clone https://github.com/Palo-IT-Australia/Spearmint.git`
2. Open the project in preferred IDE
3. Run `npm install` to install dependencies

## Tools/Accounts you need for this project
1. NFT.Storage API https://nft.storage/
2. MetaMask Wallet https://metamask.io/
3. Setup your wallet for different testnets: https://devtonight.com/posts/metamask-testnet-wallet-setup-for-blockchain-development
4. Alchemy https://dashboard.alchemyapi.io/
5. Get Etherscan API key https://etherscan.io/apis

## Environment variables
Rationale: We can help with setting up the project by providing the template for the `.env` file and asking users to hide it from git. 
Other ways to achieve is keep the template in the `README` or have `example.env` and ask users to run `cp example.env .env`

Keep in mind, there is a risk with accidentally pushing the `.env` file to the remote.
1. Run `git update-index --skip-worktree .env` to tell `git` to ignore the `.env` file
2. Set values in `.env` file.
   * `PRIVATE_KEY` - **Be Careful** :warning: Do not expose :warning: Private key for your wallet.
   * `PUBLIC_KEY` - wallet address
   * `*_API_URL` - URLs for corresponding networks
   * `NFT_STORAGE_API_KEY` - key for nft.storage
   * `ETHERSCAN_API_KEY` - key for etherscan.io
   * `ETHERSCAN_API_URL` - url for etherscan api
   * `HARDHAT_NETWORK` - blockchain network [`mainnet`, `rinkeby`, `ropsten`, `polygon`, `mumbai`]
3. Run the codebase as you wish

P.S. Non-test networks can be expensive

### Merge conflicts with `.env` file
Let git know about the file, stash local changes, pull the latest remote, handle the conflict, hide the file 
1. `git update-index --no-skip-worktree .env`
2. `git stash .env`
3. `git pull origin/main`
4. `git update-index --skip-worktree .env`

## Verify contract code on etherscan.io
1. Set your `ETHERSCAN_API_KEY` in `.env`
2. Run `npx hardhat verify --network rinkeby <contract_address>`

## Running the project
`node index.mjs --<parameters>`
