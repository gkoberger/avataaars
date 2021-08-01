const express = require('express');
const { createHash } = require('crypto');
const React = require('react');
const RDS = require('react-dom/server');
const Avataaars = require('@bugfix/avataaars').default;

const app = express();

app.set('view engine', 'html');

function getSVG(req) {
  const avatarDom = React.createElement(Avataaars, { ...req.query })
  return RDS.renderToStaticMarkup(avatarDom);
}

app.get('/', async (req, res) => {
  if (req.query.facialHairType === 'BeardMagestic') {
    req.query.facialHairType = 'BeardMajestic';
  }
  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
  }).end(getSVG(req));
});

const getHash = (req) => {
  return createHash('md5').update(req.path + "-" + JSON.stringify(req.query)).digest('hex');
};

app.get('/png/:width?', async (req, res) => {
  if (process.env.DISABLE_PNG) {
    return res.send('PNG is turned off due to abuse, but you can use SVGs still! https://github.com/gkoberger/avataaars/issues/16');
  }

  // You'll have to add this back to the package.json
  const { convert } = require('convert-svg-to-png');

  const hash = getHash(req);
  // TODO: Persistent cache
  // const fileName = `${getHash(req)}.png`;
  console.log(`req hash: ${hash}`);
  res.set('Content-Type', 'image/png');
  // TODO: This calculation is too heavy and needs to be implemented with a light weight
  const png = await convert(getSVG(req), {
    width: parseInt(req.params.width || 500, 10),
    puppeteer: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  });
  console.log('Generating new avatar');
  res.end(png);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.set("port", process.env.PORT || 3000);

const server = app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + server.address().port);
});
