const { hre, ethers } = require('hardhat');

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deployer } = await getNamedAccounts();
	const { deploy, log } = deployments;
	const chainId = network.config.chainId;

	//WETh
	const WETHC = await deploy("WETH", {
		from: deployer,
		contract: "WETH",
		// log: true,
	})
	console.log(`IWETHADDRESS: ${WETHC.address}`);	
	//ilendingpooladdreassprovider
	const ILENDINGPOOlC = await deploy("ILendingPool", {
		from: deployer,
		contract: "ILendingPool",
		// log: true
	})
	console.log(`ILENDINGPOOlADDRESS: ${ILENDINGPOOlC.address}`)
	//GETDAI
	const GETDAIC = await deploy("GetDai", {
		from: deployer
	})
}

module.exports.tags = ["all"]