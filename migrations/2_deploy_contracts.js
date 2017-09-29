const ConvertLib = artifacts.require("./ConvertLib.sol");
const Litcoin = artifacts.require("./Litcoin.sol")
const LitcoinCrowdsale = artifacts.require("./LitcoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1 // one second in the future
  const endTime = startTime + (86400 * 20) // 20 days
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[0]
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Litcoin);
  deployer.deploy(LitcoinCrowdsale, startTime, endTime, rate, wallet)
};
