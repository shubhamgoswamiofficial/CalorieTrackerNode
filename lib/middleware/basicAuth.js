"use strict";
//========================== Load Modules Start ===========================
var auth = require('basic-auth');
//========================== Load internal Module =========================
var config = require('../config');
//========================== Load Modules End =============================

var basicAuthentication = function (request, response, next) {
    console.log('basicAuthentication');
    if (request.method == 'OPTIONS') {
        response.status(200).end();
    } 
    var credentials = auth(request);
    if (!credentials || credentials.name !== config.cfg.basicAuth.name || credentials.pass !== config.cfg.basicAuth.pass) {
        response.status(401).end('Access denied')

    } else {
        next();
    }
}

module.exports = {
    basicAuthentication
}