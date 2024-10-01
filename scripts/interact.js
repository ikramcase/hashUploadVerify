// scripts/interact.js
const hre = require("hardhat");

async function main() {
    const hashStorageAddress = "0xf4cc738d4b81ff8Ef841540c6410B85394b08C24"; // Replace with your deployed contract address
    const HashStorage = await hre.ethers.getContractAt("HashStorage", hashStorageAddress);

    // Store a hash
    const hashToStore = "005f184c7cbea3965c4d833b161b67528ce7e26152620a18f17a4e8df1e7a10a"; // Replace with your hash
    const tx = await HashStorage.storeHash(hashToStore);
    await tx.wait(); // Wait for the transaction to be mined

    console.log("Hash stored:", await HashStorage.retrieveHash());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
