//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

library Bar {
    function hello() internal view returns (string memory) {
        string memory msg = "Hello, I am Bar.";
        console.log(msg);
        return msg;
    }
}
