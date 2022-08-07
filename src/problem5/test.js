const { ethers } = require("ethers");

const ADDR = "0xe0a8694d12c777B19771f7A838d95D2de6618075"; // your contract address
const { abi } = require("./build/contracts/GetBalances.json");

const ADDRESS = "0x918335bcb1bc69558122ee441c124a8d15194934"; // some wallet address with token balance
const TOKENS = [
  "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
  "0x7af963cf6d228e564e2a0aa0ddbf06210b38615d",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider("goerli");

const test = async () => {
  const contract = new ethers.Contract(ADDR, abi, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log);
