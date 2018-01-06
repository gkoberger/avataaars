This renders [Avataaars](https://github.com/fangpenlin/avataaars) in a way that can be embedded!

Here's some example URLs:

    https://avataaars.io/?hairColor=BrownDark&clotheType=Hoodie&avatarStyle=Circle
    https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=UnibrowNatural&facialHairType=BeardLight&hairColor=Black&mouthType=Eating&skinColor=Yellow&topType=LongHairShavedSides
    https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Black&clotheType=GraphicShirt&eyeType=Close&eyebrowType=Default&facialHairColor=BlondeGolden&facialHairType=Blank&hairColor=PastelPink&mouthType=Sad&skinColor=Tanned&topType=Hat

You can build your query strings here:

    https://getavataaars.com/

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
