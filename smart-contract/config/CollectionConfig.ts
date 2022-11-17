import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'RGroup',
  tokenName: 'R Pass Card',
  tokenSymbol: 'RPC',
  hiddenMetadataUri: 'ipfs://Qmf2ic5DXpfnMNjpbF1QhY2aUt455SBBx6KbPB37Ln4dJx/0.json',
  maxSupply: 500,
  whitelistSale: {
    price: 0.001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.003,
    maxMintAmountPerTx: 1,
  },
  contractAddress: '0x170522Fe984abB6112Fa65Bd5D1B89df43a7C07A',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
