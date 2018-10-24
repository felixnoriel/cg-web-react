// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: (process.env.NODE_ENV !== 'production' ) })
const handler = routes.getRequestHandler(app)
const express = require('express');
const path = require('path');
const server = express();
const fetch = require('isomorphic-unfetch');
const moment = require('moment');

app.prepare()
  .then(() => {

      // static files - use if needed
      // example:
      // server.use('/robots.txt', express.static(path.join(__dirname, '/static/robots.txt')));

      const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
        app.render(req, res, route.page, query)
      })

        if (process.env.NODE_ENV === 'production') {
          // this is a production build for a better optimised output
          const bodyParser = require('body-parser')
          const cors = require('cors')
          const compression = require('compression')
          console.log('Production '+process.env.NODE_ENV+' env..');

          server.use(handler)
                .use(compression)
                .use(cors)
                .use(bodyParser.json())
                .listen(3000);
        }else{
          console.log('development environment..')

          server
          .use(handler)
          .listen(3000);
        }

      })
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})