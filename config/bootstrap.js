/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    global.twitterShareMessage = "https://twitter.com/home?status=Check%20out%20this%20super%20fresh%20%40sails.js%20full%20auth%20template%20for%20your%20project!%20By%20%40icenodes%20%23nodejs%20%23startup%20https%3A%2F%2Fgithub.com%2Fbmustata%2Fsails-auth-super-template";
    global.facebookShareMessage = "https://www.facebook.com/sharer/sharer.php?u=http://sails-auth-super-template.icenodes.com/";

    cb();
};
