const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// How to use
// name (should be unique) - name of the route
// pattern - url of the website eg: /about
// page - page name of the file to use under /pages directory

// register additional routes if needed
routes
.add({name: 'index', pattern: '/', page: 'index'})
.add({name: 'projects', pattern: '/projects', page: 'page'})
.add({name: 'projectview', pattern: '/projects/:slug', page: 'page'})

