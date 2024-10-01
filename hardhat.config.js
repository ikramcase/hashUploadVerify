require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        development: {
            url: "http://127.0.0.1:7545", // Ganache GUI URL
            accounts: ["0x012d49f04e58c9cf6c4fd7240f5a81e55cd6920b08f612dedc3392056ff54b74"], // Replace with your Ganache account's private key
        },
    },
};
