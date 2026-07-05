// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
/// PetVerse Badge – ERC1155 minimal – L2 Polygon
contract PetVerseBadge {
  mapping(uint256 => mapping(address => uint256)) public balanceOf;
  event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
  function mint(address to, uint256 id, uint256 amount) external {
    balanceOf[id][to] += amount;
    emit TransferSingle(msg.sender, address(0), to, id, amount);
  }
  // IDs: 1=مهربون محله, 2=پارک‌گرد, 3=مربی توله, 4=حامی نجات
}
