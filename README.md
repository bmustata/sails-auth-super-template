![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-auth-super-template

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/bmustata/icenodes?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

Sails.js Email/Social Auth full template to make it super easy to start a new project.
Currently we support:
- Local authentication with email and user signup
- Twitter authentication
- Facebook authentication

You can see the demo at http://sails-auth-super-template.icenodes.com

# Why

We are building a lot of internal projects and external projects like Startup MVPs and we need it a base template for our authentication and authorization project with support for Twitter/Facebook login.

# Screenshots

![Sails Auth Login Screen](/screenshot/screenshot-demo.jpg?raw=true "Sails Auth Login Screen")

# Requirements

- Sails.js >= 0.11.0
- Node.js >= 0.10.0
- MongoDB

# Quick start

- Download / Clone the repository `git clone https://github.com/bmustata/sails-auth-super-template`
- Navigate into your project directory 'cd sails-auth-super-template'
- Run `npm install` to install dependencies
- Run 'bower install' to install frond-end packages
- Start / Install your MongoDB
- Setup your MongoDB settings in `config/env/development.js` or `config/env/production.js`
- Enable your strategies in the previous config file:
    - Local Strategy: `enableLocalAuth: true/false`
    - Twitter Strategy: `enableTwitterAuth: true/false`
    - Facebook Strategy: `enableFacebookAuth: true/false`
- Start Sails.js application with `sails lift`
- Open `http://localhost:1337` in your browser

# License

Copyright &copy; 2014-2015 [ICENodes](http://icenodes.com). Licensed under the terms of the [MIT license](LICENSE.md).

# More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Node.js Development and Consulting](http://icenodes.com)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ)
- [Sails.js](http://sailsjs.org/)

Provided by ICENodes - www.icenodes.com
