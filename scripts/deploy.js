const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const TodoList = await hre.ethers.getContractFactory("TodoList");
  const todoList = await TodoList.deploy();
  await todoList.deployed();
  console.log("TodoList deployed to:", todoList.address);

  fs.writeFileSync(
    "./config.js",
    `
  export const contractAddress = "${todoList.address}"
  export const ownerAddress = "${todoList.signer.address}"
  `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
