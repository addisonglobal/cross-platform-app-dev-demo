const blacklist = require('metro-bundler/src/blacklist');

const config = {
    getBlacklistRE() {
        return blacklist([
            /web-demo\/node_modules\/react-native.*/,
        ]);
    },
};

module.exports = config;
