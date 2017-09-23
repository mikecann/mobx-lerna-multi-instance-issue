# MobX Lerna Multi Instance Issue

This repo demonstrates that MobX complains about multiple instances while using lerna.

To install:

`npm install`

This should install lerna then bootstrap lerna.

To develop:

`npm start`

This will start comilation on the shared and client packages and should open a tab in chrome with the client. If you open the console you will see the MobX warning.

## Note:

I am intentionally using `npm` here instead of `yarn` just to keep things simple.