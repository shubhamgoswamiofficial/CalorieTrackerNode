"use strict";

//========================== Load Modules Start ===========================

//========================== Load External Module =========================

var sha256 = require('sha256');
var bcrypt = require('bcrypt');
var mongoose = require("mongoose");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================


/**
 * return user home
 * @returns {*}
 */
function getUserHome() {
    return process.env.HOME || process.env.HOMEPATH;
}

function getNodeEnv() {
    return process.env.NODE_ENV;
}

/**
 * returns if email is valid or not
 * @returns {boolean}
 */
function isValidEmail(email) {
    var pattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
    return new RegExp(pattern).test(email);
}
/**
 * returns if zipCode is valid or not (for US only)
 * @returns {boolean}
 */
function createHashSHA256(pass) {
    return sha256(pass)
}

/**
 * returns random number for password
 * @returns {string}
 */
var getRandomPassword = function () {
    return getSHA256(Math.floor((Math.random() * 1000000000000) + 1));
};

var getSHA256 = function (val) {
    return sha256(val + "password");
};

var encryptHashPassword = function (password, salt) {
    return bcrypt.hashSync(password, salt);
}


var generateSaltAndHashForPassword = function (password) {
    var encryptPassword = {salt: "", hash: ""};
    encryptPassword['salt'] = bcrypt.genSaltSync(10);
    encryptPassword['hash'] = bcrypt.hashSync(password, encryptPassword['salt']);
    return encryptPassword;
}

function convertToObjectIds(_id) {
    return mongoose.Types.ObjectId(_id);
}

//========================== Export Module Start ===========================

module.exports = {
    getUserHome, 
    getNodeEnv,
    isValidEmail,
    createHashSHA256,
    getRandomPassword,
    encryptHashPassword,
    generateSaltAndHashForPassword,
    convertToObjectIds
};

//========================== Export Module End===========================
