const User = require('./userModel');
let BaseDao = new require('../../../dao/baseDao');
const userDao = new BaseDao(User);

function register(userInfo) {
    let user = new User(userInfo);
    return userDao.save(user)
}


function isEmailExist(params) {
    let query={}
    query.email = params.email
    return userDao.findOne(query)
}

function login(params) {
    let query={}
    query.email = params.email
    query.password = params.password
    return userDao.findOne(query)
}


module.exports = {
    register,
    isEmailExist,
    login
}