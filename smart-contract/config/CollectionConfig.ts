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
  tokenName: 'R Club Card',
  tokenSymbol: 'GCC',
  hiddenMetadataUri: 'ipfs://QmWo4av3eVP69FSdDKXPiCqzcpwzp4oMw6QpJM1zSCbQdw/hidden.json',
  maxSupply: 500,
  whitelistSale: {
    price: 0.00001,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.00002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.00003,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x1b94061f02d2E1A9020e686Bc590E3287Bbe81c9",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
