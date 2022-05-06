# Spearmint
Repository for Blocktrust Project Julian 20 NFTs

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

## Environment variables
Rationale: We can help with setting up the project by providing the template for the `.env` file and asking users to hide it from git. 
Other ways to achieve is keep the template in the `README` or have `example.env` and ask users to run `cp example.env .env`

Keep in mind, there is a risk with accidentally pushing the `.env` file to the remote.
1. Run `git update-index --skip-worktree .env` to tell `git` to ignore the `.env` file
2. Set values in `.env` file.
   * `PRIVATE_KEY` - **Be Careful** :warning: Do not expose :warning: Private key for your wallet.
   * `PUBLIC_KEY` - wallet address
   * `*_API_URL` - URLs for corresponding networks
   *  `NFT_STORAGE_API_KEY` - API KEY
3. Run the codebase as you wish

P.S. Non-test networks can be expensive

### Merge conflicts with `.env` file
Let git know about the file, stash local changes, pull the latest remote, handle the conflict, hide the file 
1. `git update-index --no-skip-worktree .env`
2. `git stash .env`
3. `git pull origin/main`
4. `git update-index --skip-worktree .env`

## Running the project
`node scripts/mint-nft.js`
