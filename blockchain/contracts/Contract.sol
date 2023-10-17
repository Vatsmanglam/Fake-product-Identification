// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Manufacturer {
    struct Product {
        string name;
        uint256 id;
        uint256 batchNumber;
        string brand;
        string date;
        uint256 price;
    }
    mapping(uint256 => Product) public products;
    uint256 public numberOfProducts = 0;

    function addProduct(
        string memory _name,
        uint256 _id,
        uint256 _batchNumber,
        string memory _brand,
        string memory _date,
        uint256 _price
    ) public {
        Product storage product = products[numberOfProducts];
        product.name = _name;
        product.id = _id;
        product.batchNumber = _batchNumber;
        product.brand = _brand;
        product.date = _date;
        product.price = _price;

        numberOfProducts++;
    }

    function getProduct(uint256 _id) public view returns (Product memory) {
        require(_id < numberOfProducts, "Product does not exist");
        return products[_id];
    }
}
