pragma solidity ^0.8.6;

//What contract do we use?
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract NFT is ERC721 {
    //address of the artist(royalty wallet)
  address public artist;
    // address of the token used for transaction fee for each royalty
  address public txFeeToken;
   // which amount of token we are going to pay for each royalty
  uint public txFeeAmount;
  // list of addresses who dont need to pay royalty
  mapping(address => bool) public excludedList;

  constructor(
    address _artist, 
    address _txFeeToken,
    uint _txFeeAmount
  ) ERC721('My NFT', 'ABC') {
    artist = _artist;
    txFeeToken = _txFeeToken;
    txFeeAmount = _txFeeAmount;
    // add artist so he dont pay royalty
    excludedList[_artist] = true; 
    // mint nft with id 0 to send to artist
    _mint(artist, 0);
  }

    // function to add excluded address, just the artist can add and delete addresses
  function setExcluded(address excluded, bool status) external {
    require(msg.sender == artist, 'artist only');
    excludedList[excluded] = status;
  }


// need to override those function to add royalties
  function transferFrom(
    address from, 
    address to, 
    uint256 tokenId
  ) public override {
     require(
       _isApprovedOrOwner(_msgSender(), tokenId), 
       'ERC721: transfer caller is not owner nor approved'
     );
     if(excludedList[from] == false) {
      _payTxFee(from);
     }
     _transfer(from, to, tokenId);
  }

// check if the reciepient can handle rc721 token (avoid lock tokens)
  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId
   ) public override {
     if(excludedList[from] == false) {
       _payTxFee(from);
     }
     safeTransferFrom(from, to, tokenId, '');
   }

  function safeTransferFrom(
    address from,
    address to,
    uint256 tokenId,
    bytes memory _data
  ) public override {
    require(
      _isApprovedOrOwner(_msgSender(), tokenId), 
      'ERC721: transfer caller is not owner nor approved'
    );
    if(excludedList[from] == false) {
      _payTxFee(from);
    }
    _safeTransfer(from, to, tokenId, _data);
  }

  function _payTxFee(address from) internal {
    IERC20 token = IERC20(txFeeToken);
    token.transferFrom(from, artist, txFeeAmount);
  }
}