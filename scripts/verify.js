// scripts/verify.js
const hre = require("hardhat");

async function main() {
    const hashStorageAddress = "0xf4cc738d4b81ff8Ef841540c6410B85394b08C24"; // Replace with your deployed contract address
    const HashStorage = await hre.ethers.getContractAt("HashStorage", hashStorageAddress);

    // Retrieve the stored hash
    const storedHash = await HashStorage.retrieveHash();
    console.log("Stored Hash:", storedHash);

    // Define the hash you want to verify (replace with the actual hash)
    const hashToVerify = "005f184c7cbea3965c4d833b161b67528ce7e26152620a18f17a4e8df1e7a10a"; // Replace with the hash you're verifying

    // Compare the hashes
    if (storedHash === hashToVerify) {
        console.log("The hash matches!");
    } else {
        console.log("The hash does not match.");
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
