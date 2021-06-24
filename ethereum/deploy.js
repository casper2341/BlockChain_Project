const HDWlletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWlletProvider(
  'mercy parrot gold ahead adjust click lunch equip tell scatter slow upset',
  'https://rinkeby.infura.io/v3/7f9fc68b92b9455ba1d78beced03aed4'
);

const web3 = new Web3(provider);

const deploy = async () =>
{
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: compiledFactory.bytecode })
  .send({gas: '1000000', from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};
deploy();
