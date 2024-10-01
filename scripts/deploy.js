// scripts/deploy.js
const hre = require("hardhat");

async function main() {
    const HashStorage = await hre.ethers.getContractFactory("HashStorage");
    const hashStorage = await HashStorage.deploy();

    await hashStorage.deployed();
    console.log("HashStorage deployed to:", hashStorage.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
