//SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;


import "@aave/protocol-v2/contracts/flashloan/base/FlashLoanReceiverBase.sol";
import "@aave/protocol-v2/contracts/interfaces/ILendingPool.sol";



contract FlashLoan is FlashLoanReceiverBase{
	constructor(address _addrProvider) FlashLoanReceiverBase(_addrProvider) public {

	}

	function _flashLoan(address[] calldata _assets, uint256[] calldata _amount) internal {

		address payable receiver = address(this);
		address onBehalfOf = address(this);
		bytes memory params = "";
		uint16 referralCode = 0;
		uint256[] memory modes = new address[](_assets.length);
		for(uint i = 0; i <= _assets.length; i++){
			modes[i] = 0;
		}

		LENDING_POOL.flashLoan(
			receiver,
			_assets,
			_amount,
			modes,
			onBehalfOf,
			params,
			referralCode
		);
	}

	function flashLoan(address _asset) public {
		uint amount = 1 ether;
		address[] memory assets = new address[](1);
		uint256[] memory amounts = new uint256[](1);
		assets[0] = _asset;
		amounts[0] = amount;
		_flashLoan(assets, amounts);
	}

	function executeOperation (
		address[] calldata assets,
		uint256[] calldata amount,
		uint256[] calldata premiums,
		address initiator,
		bytes calldata params
	) external override returns(bool) {
		
		for(uint i = 0; i <= assets.length; i++){
			uint debt = amount[i] + premiums[i];
			IERC20(assets[i].approve(address(LENDING_POOL), debt));
		}

		return true;
	}
	



}