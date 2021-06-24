import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x512b7bd14432399ADE4c0B481a5cC0e622808132'
);

export default instance;
