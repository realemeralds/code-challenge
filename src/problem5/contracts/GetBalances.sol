// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ERC20 {
    function balanceOf(address _owner) external view returns (uint256);
}

contract GetBalances {
    struct tokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(address walletAddr, address[] memory tokenAddrs) public view returns (tokenBalance[] memory) {
        tokenBalance[] memory tokenBalanceArray = new tokenBalance[] (
            tokenAddrs.length
        );
        for (uint i=0; i < tokenAddrs.length; i++) {
            address token = tokenAddrs[i];
            uint256 balance = ERC20(token).balanceOf(walletAddr);
            tokenBalanceArray[i] = tokenBalance(token, balance);
        }
        return tokenBalanceArray;
    }
}
