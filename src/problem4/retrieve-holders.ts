import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);
const swthAddress: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const swthAbi: string[] = [
  "function balanceOf(address) view returns (uint256)",
];
const swthContract = new ethers.Contract(swthAddress, swthAbi, provider);

const wallets: string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

interface BigNumber {
  _hex: string;
  _isBigNumber: boolean;
}

function parseAndFormatInt(hexNo: string, base: number): string {
  const parsedNumber = parseInt(hexNo, base) * 1e-8;
  return parsedNumber.toLocaleString(undefined, {
    minimumFractionDigits: 8,
    maximumFractionDigits: 8,
  });
}

const main = async () => {
  for (const wallet of wallets) {
    try {
      const accountBalance: BigNumber = await swthContract.balanceOf(wallet);
      const parsedAccountBalance: string = parseAndFormatInt(accountBalance._hex, 16);
      console.log(`${wallet} ${parsedAccountBalance}`);
    } catch (err) {
      console.log(err);
    }
  }
};

main();
