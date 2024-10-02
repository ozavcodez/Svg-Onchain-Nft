import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
const {SEPOLIA_URL, PRIVATE_KEY, ETHER_SCAN} = process.env
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks:{
    sepolia:{
      url:SEPOLIA_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []  
    }
    
  },
  etherscan:{
    apiKey:ETHER_SCAN,
  },
};
export default config;