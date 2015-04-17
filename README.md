![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-auth-super-template
Sails.js Email/Social Auth full template to make it super easy to start a new project.
Currently we support:
- Local authentication with email and user signup
- Twitter authentication
- Facebook authentication

You can see the demo at http://sails-auth-super-template.icenodes.com

# Why

We are building a lot of internal projects and external projects like Startup MVPs and we need it a base template for our authentication and authorization project with support for Twitter/Facebook login.

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
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>

Provided by ICENodes - www.icenodes.com
