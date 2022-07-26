import { ethers } from 'ethers';
import express from 'express';
import schedule from 'node-schedule';
import { ERC20Abi__factory } from './generated';

const app = express();
// input desired cron schedule via https://crontab.guru/
schedule.scheduleJob('*/1 * * * *', async () => {
  const networkProvider = ethers.providers.getDefaultProvider();
  const abi = ERC20Abi__factory.connect('0xD533a949740bb3306d119CC777fa900bA034cd52', networkProvider)
  const name = await abi.name()
  console.log('token name: ', name)
})

app.listen()