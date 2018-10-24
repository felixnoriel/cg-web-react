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
actions - for redux actions
reducers - for redux reducers
components - reusable components, no access to store, only gets data from props that's been passed to it
containers - smart components, has access to store
pages - files that are mapped in routes.js, entry point to an actual view component
static - static files, images, etc
helpers - general functions that are used in this website