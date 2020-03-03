import express from 'express';
const { convert } = require('convert-svg-to-png');

const aws = require('./utils/aws');

var crypto = require('crypto');

// React Components
import React from 'react';
import RDS from 'react-dom/server';
import Avataaars from 'avataaars';

const app = express();

app.get('/', async (req, res) => {
  const appString = RDS.renderToString(<Avataaars {...req.query} />);

  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
  });
  res.end(appString);
});

const getHash = (req) => {
  return crypto.createHash('md5').update(req.path + "-" + JSON.stringify(req.query)).digest('hex');
};

app.get('/png/:width?', async (req, res) => {
  const hash = getHash(req);

  const appString = RDS.renderToString(<Avataaars {...req.query} />);

  const fileName = `${getHash(req)}.png`;

  res.set('Content-Type', 'image/png');

  aws.getObject(fileName, async (err, data) => {
    if (data) {
      console.log('Existing avatar found');
      return res.end(data.Body);
    }

    const png = await convert(appString, {
      width: parseInt(req.params.width || 500, 10),
      puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    });

    console.log('Generating new avatar');
    aws.uploadFile(fileName, png, () => {
      res.end(png);
    });
  });

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

module.exports = app;
