const userDao = require('./userDao');
const appUtils = require("../../../appUtils");
//========================== Load Modules End ==============================================

function register(loginInfo) {
    if (loginInfo.password)
        loginInfo.password = appUtils.createHashSHA256(loginInfo.password);
    return userDao.register(loginInfo);
}

function isEmailExist(params) {
    return userDao.isEmailExist(params);
}


function login(loginInfo) {
    if (loginInfo.password)
        loginInfo.password = appUtils.createHashSHA256(loginInfo.password);
    return userDao.login(loginInfo);
}
module.exports = {
    register,
    isEmailExist,
    login
}