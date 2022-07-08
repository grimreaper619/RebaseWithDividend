const Rebase = require("./build/contracts/Titano.json");
const Provider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const Web3 = require("web3");
const provider = new Provider(process.env.MNEMONIC, process.env.BSCTESTNET);
const web3 = new Web3(provider);
const contractAdd = "0x5970EFF1018F15Bb755c4CEc1703B3a7ab6E0d4F"; //Update here

const contract = new web3.eth.Contract(Rebase.abi, contractAdd);

const rebase = async () => {
  accounts = await web3.eth.getAccounts();
  const tx = await contract.methods.manualRebase().send({from: accounts[0]});

  var today = new Date();
  console.log("Status: " + tx.status);
  console.log("Time called: " + today);
  console.log("\n");
};

setInterval(rebase, 6000); // 1 minute
