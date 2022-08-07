const GetBalances = artifacts.require("GetBalances.sol");

module.exports = function (deployer) {
  deployer.deploy(GetBalances);
};
