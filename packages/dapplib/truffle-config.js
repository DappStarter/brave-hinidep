require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give narrow frown ski story cruise rifle clutch grace light army ghost'; 
let testAccounts = [
"0x09ea7579b9fe3264d50e13df13bae8ffe4459fb7eabbc0b585748c1e0d5d8011",
"0x53d5dc1a7487bce66a673a939a22591cb7fded5a1b87143638f4076d1cddfff8",
"0x8658536bbac5f6e2dd319bae2c5c219f819bf3e3001deaa44f04fd4e347bff5c",
"0x762c2271bda773476b6c6f11520968c7ddd5a97d354d50a423e74eb918f37430",
"0x8b67dfa8b29002a33b9541a5bb48437fae288c06a3e6008dd57baa31d6a49a20",
"0xee29cfdeafc1c50402b7bf774388c2ae03a9822deac0bfbe3961c1b33d4abef5",
"0xd5325b1b7bd0206cc7e7b4dd5570af7de588de2f2aa9af1b02d2908142b1a339",
"0xa531580d0e4eb2ceaca78bd755a32e1abc4bf4c0a4f571084d39957e5302940e",
"0xeb249f44ea237926281f4ccaf6cb5203b7edc438dcdabc169987a7f0ec1afdaa",
"0x921697df516857c86748e38ade7da7e45abb99013b04e80699c74d2b6da49105"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


