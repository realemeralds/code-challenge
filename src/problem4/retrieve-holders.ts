import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);
async function test() {
  try {
    console.log("waiting");
    const balance = await provider.getBalance("ethers.eth");
    console.log(balance);
  } catch (err) {
    console.log(err);
  }
}

test();
