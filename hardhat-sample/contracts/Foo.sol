//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

library Foo {
    function hello() internal view returns (string memory) {
        string memory msg = "Hello, I am Foo.";
        console.log(msg);
        return msg;
    }
}