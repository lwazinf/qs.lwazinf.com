const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const QuickSellFactory = await hre.ethers.getContractFactory("QuickSell");
  const quickSell = await QuickSellFactory.deploy();
  await quickSell.deployed();

  console.log("Contract address:", quickSell.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

};

runMain();