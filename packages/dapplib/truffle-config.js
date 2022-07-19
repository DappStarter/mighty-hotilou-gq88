require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name reflect saddle minor hockey knife equal giant'; 
let testAccounts = [
"0xe61b7482b3bddcd0da57a3b0482963c5f66ab767a39322721bb911aab7da6f44",
"0xfb4d810c6bc03cd56161c7f520baebe43376b253c23338ae4e794b80651081bb",
"0xeb53c4c4f9e9f26edac5691e6044d322e1eef0c4026efbccbf8110b9a13c5df1",
"0x241facca495fddfeefb161083029ce573bb2b51e07511020132b965373fa618c",
"0x86aec66ef32bc0064ebb17058b702c4f882e3f234d4164f7d855f787b63e8e39",
"0x4327759afd9bf0b50034d8d2514f84d48deb1f2f0a5e5b3f63268617f606a542",
"0xa0808b2d8994154f73c086e165fb5626174ba13ca9d8745d35103d11f9086b98",
"0x6f09b77d36d48589232b6728e268b9b87c437d7f6e0cd9c5612faabc23a66f3a",
"0xc51d613640dd1bbc13b6b99c2993a41eb49f6f6bc87d325d589e14cbd6245cf5",
"0x6826fa0bb772d23c13aee01c035135b295fdec9a084798b926f10b4d5e68f9b9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

