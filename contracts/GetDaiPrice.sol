//SPDX-License-Identifier: MIT
pragma solidity ^0.6.6;


import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";


contract GetDai {
	AggregatorV3Interface internal priceFeed = AggregatorV3Interface(0x0d79df66BE487753B02D015Fb622DED7f0E9798d);
	
    function getPrice() public view returns(uint256){
        (,int256 answer,,,) = priceFeed.latestRoundData();
        return uint256(answer) / 10 ** 8;
    }	
}