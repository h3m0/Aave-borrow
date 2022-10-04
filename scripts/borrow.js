


const { getNamedAccounts, deployments, ethers } = require('hardhat');
const { getWeth } = require("./getWeth");
const value = ethers.utils.parseEther("0.02");


async function main() {	
	const { deployer } = await getNamedAccounts();
	await getWeth(deployer, value);
	const LP = await ethers.getContract("ILendingPool");
	const WETH = await ethers.getContract("WETH");	
	await WETH.approve(LP.address, value)
	console.log("approved");
	console.log("Handing collateral over...")
	const tx = await LP.deposit(
		WETH.address,
		value,
		deployer,
		0,
	{
		from: deployer		
	})
	await tx.wait(1);
	console.log(`Deposited collatral!`)
	console.log("Borrowing 1 DAI...")
	await LP.borrow('0x0d79df66BE487753B02D015Fb622DED7f0E9798d', 1, 1, 0, deployer);
	console.log("Borrowed 1 DAI")
	// console.log(totalDebtETH);
	// console.log(totalCollateralETH);
	// console.log(availableBorrowsETH)
	await LP.getUserAccountData(LP.address)
	// const tx = address.bor
}

main()
.then(() => process.exit(0))
.catch((error) => {
	console.error(error),
	process.exit(1)
})