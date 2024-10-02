import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OnChainNFTModule = buildModule("OnChainNFTModule", (m) => {

    const save = m.contract("OnChainNFT", []);

    return { save };
});

export default OnChainNFTModule;