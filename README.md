This renders [Avataaars](https://github.com/fangpenlin/avataaars) in a way that can be embedded!

Here's some example URLs:

    https://avataaars.io/?hairColor=BrownDark&clotheType=Hoodie&avatarStyle=Circle
    https://avataaars.io/?accessoriesType=Prescription01&avatarStyle=Circle&clotheType=Hoodie&eyeType=EyeRoll&eyebrowType=UnibrowNatural&facialHairType=BeardLight&hairColor=Black&mouthType=Eating&skinColor=Yellow&topType=LongHairShavedSides
    https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Black&clotheType=GraphicShirt&eyeType=Close&eyebrowType=Default&facialHairColor=BlondeGolden&facialHairType=Blank&hairColor=PastelPink&mouthType=Sad&skinColor=Tanned&topType=Hat


[CURRENTLY DISABLED] If you want a PNG, you can add `/png` to the URL like this:

    https://avataaars.io/png?hairColor=BrownDark&clotheType=Hoodie&avatarStyle=Circle

[CURRENTLY DISABLED] And you can resize the PNG using `/png/{width}`, like this:

    https://avataaars.io/png/2000?hairColor=BrownDark&clotheType=Hoodie&avatarStyle=Circle

You can build your query strings here:

    https://getavataaars.com/

DEVELOPMENT
===========

```
   $ git clone git@github.com:gkoberger/avataaars.git
   $ cd avataaars
   $ npm install
   $ npm start
```

Most of the good stuff is in `app.js`!

OTHER
=====

I removed the Puppeteer buildpack, but if we want it back, add https://buildpack-registry.s3.amazonaws.com/buildpacks/jontewks/puppeteer.tgz to Heroku
