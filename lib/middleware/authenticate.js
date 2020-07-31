"use strict";
//========================== Load Modules Start ===========================
var Promise = require("bluebird");
var mongoose = require("mongoose");
//========================== Load internal Module =========================

const redisSession = require("../redisClient/session");
const customException = require("../customException");
//========================== Load Modules End =============================

var __verifyTok = function (acsTokn) {
    return redisSession.getByToken(acsTokn)
        .then(function (tokenPayload) {
            return tokenPayload;
        })
        .catch(function (err) {
            throw err
        })
};

var expireToken = function (req, res, next) {
    let acsToken = req.get('accessToken');
    return redisSession.expire(acsToken)
        .then(function (result) {
            //return result;
            next();
        })
        .catch(function (err) {
            next(err)
        })
}

var autntctTkn = function (req, res, next) {
    let acsToken = req.get('accessToken');

    __verifyTok(acsToken)
        .bind({})
        .then(function (tokenPayload) {
            //console.log('tokenPayload: ', tokenPayload);
            if (tokenPayload.d) {
                let userId=mongoose.Types.ObjectId(tokenPayload.d.userId)
                req.user = tokenPayload.d;
                req.user.userId=userId;
                next()
            } else {
               throw customException.sessionExpired();
                //res.render('reset_failure', {error_message: "Your token has been expired. Please try forgot password again."});
            }
        })
        .catch(function (err) {
            next(err)
        })
}



//========================== Export Module Start ===========================

module.exports = {
    autntctTkn,
    expireToken,
};

//========================== Export Module End ===========================
