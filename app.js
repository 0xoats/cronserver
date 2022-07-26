const express = require('express');
const schedule = require('node-schedule');
const app = express();

// input desired cron schedule via https://crontab.guru/
schedule.scheduleJob('*/1 * * * *', () => {
  console.log('executing...')
})

app.listen()