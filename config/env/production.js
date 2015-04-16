/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

    grunt: {
        _hookTimeout: 60000
    },

    application_auth: {

        enableLocalAuth: true,

        // Get your keys from https://apps.twitter.com/
        enableTwitterAuth: true,
        twitterConsumerKey: "",
        twitterSecretKey: "",
        twitterCallbackURL: "http://you-domain.com/auth/twitter/callback",

        enableFacebookAuth: true,
        facebookClientID: "",
        facebookClientSecret: "",
        facebookCallbackURL: "http://you-domain.com/auth/facebook/callback"
    },

    /***************************************************************************
     * Set the default database connection for models in the production        *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/

    connections: {
        prodMongodbServer: {
            adapter: 'sails-mongo',
            host: 'localhost',
            port: 27017,
            //user: '',
            //password: '',
            database: 'sails-auth'
        }
    }

    //session: {
    //    adapter: 'mongo',
    //    host: 'localhost',
    //    port: 27017,
    //    db: 'sails-auth',
    //    collection: 'sessions'
    //}

    // models: {
    //   connection: 'someMysqlServer'
    // },

    /***************************************************************************
     * Set the port in the production environment to 80                        *
     ***************************************************************************/

    // port: 80,

    /***************************************************************************
     * Set the log level in production environment to "silent"                 *
     ***************************************************************************/

    // log: {
    //   level: "silent"
    // }

};
