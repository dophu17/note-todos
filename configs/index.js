var config = require("./config");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb://${ config.username }:${ config.password }@ds125255.mlab.com:25255/node-todo`;
    }
}