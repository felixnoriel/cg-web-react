Main technologies used:
- React, NextJS framework for SSR
	- for more details, visit: https://nextjs.org/ and https://github.com/zeit/next.js/
- SASS
- Redux for state management
- Express JS as a server to run the website

How to use
1. npm install
2. npm run dev

Starting point
- server.js

Files / Folder structure
- store - keep here all store functionalities ( access to store state, all requests in regard to any API )
- store/actions - actions
- store/reducers - reducers
- components - reusable / dumb components, no access to store, only gets data/functions from props that's been passed to it
- containers - smart components, has access to store, all API requests should be done here, pass the functions to components if needed (eg: getting comments, changing store state)
- pages - files that are mapped in routes.js, entry point to an actual view component
	- all data that needs to be SEO optimised should be fetched here
- static - static files (robots.txt, sitemap.xml, etc), images, etc
- helpers - general functions that are used in this website (eg: shortcodes, normalisation of objects, etc)

Backend / Wordpress
- Permalinks
	- Everytime you create a new post type, change the permalinks in Wordpress admin -> Settings -> Permalinks -> "Permalink Settings for Custom Post Types"
	- permalinks is configured as /%post_type%/%post_type-category%/%postname%/ eg: drinks/spirits/margarita
	- When adding a new category under any post type, format should always be post_type-category eg: drinks-category