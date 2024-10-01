// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashStorage {
    string public storedHash;

    // Function to store a hash
    function storeHash(string memory _hash) public {
        storedHash = _hash;
    }

    // Function to retrieve the stored hash
    function retrieveHash() public view returns (string memory) {
        return storedHash;
    }
}
