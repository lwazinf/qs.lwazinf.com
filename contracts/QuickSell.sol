// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

// // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // 

contract QuickSell {
    address payable public owner;
    mapping(string => SubBank) public subBanks;

    constructor() payable {
        owner = payable (msg.sender);
    }

    function createContract(address payable _receiver, string memory _uuid) public payable {
        owner.transfer(0.005 ether);
        SubBank subBank = (new SubBank){value: SafeMath.sub(msg.value, 0.005 ether)}(_receiver);
        subBanks[_uuid] = subBank;
    }
}

// // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // 

contract SubBank {
    constructor(address payable _receiver) payable {
        _receiver.transfer(msg.value);
    }
}