const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// How to use
// name (should be unique) - name of the route
// pattern - url of the website eg: /about
// page - page name of the file to use under /pages directory

// register additional routes if needed
routes
.add('/', '/', 'index')
.add('posttype', '/:posttype', 'post')
.add('posttype/:category', '/:posttype/:category', 'post')
.add('posttype/:category/:slug', '/:posttype/:category/:slug', 'post')
.add('posttype/:category/:slug/:twoslug', '/:posttype/:category/:slug/:twoslug', 'post')
.add('posttype/:category/:slug/:twoslug/:threeslug', '/:posttype/:category/:slug/:twoslug/:threeslug', 'post')