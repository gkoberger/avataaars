This renders [Avataaars](https://github.com/fangpenlin/avataaars) as an API!

DEVELOPMENT
===========

   $ git clone git@github.com:gkoberger/avataaars.git
   $ cd avataaars
   $ npm install
   $ npm start

Most of the good stuff is in `app.js`!

ISSUES
======

I wanted to just include Avataaars from npm, however I couldn't get babel working right and the `import` statements were causing issues. I fixed this by changing the package.json to be `commonjs` modules, and running `npx typescript` to generate  the `/dist` folder. Then, I copied the `dist` folder into this repo. A bit messy; I'll fix it someday... maybe.
