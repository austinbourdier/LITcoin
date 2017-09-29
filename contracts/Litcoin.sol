pragma solidity ^0.4.4;

import "./ConvertLib.sol";


import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract Litcoin is MintableToken {
  string public name = "Litcoin";
  string public symbol = "LIT";
  uint256 public decimals = 18;
}
