# NodeExpressHandlebarsBootstrap
A repo with a base Node/Express/Bootstrap configuration using the Handlebars templating engine

Got super annoyed that I couldn't find a decent NodeJS/Express/Bootstrap generator so I made one in GitHub.

### To Use:
1. Clone the repo:
```
git clone https://github.com/rayterrill/NodeExpressHandlerbarsBootstrap.git
```
2. Install NodeJS dependencies:
```
npm install
```
3. Create a credentials.js file in the root of your project with the following info:
```
module.exports = {
   cookieSecret: 'YOUR_SUPER_SECRET_COOKIE_SECRET'
};
```
4. Fire up the server:
```
npm start
```
5. Profit.