const userService = require('./userService');
const redisSession = require("../../../redisClient/session");
const customException = require("../../../customException");
var ip = require('ip');

function register(params) {
    return userService.isEmailExist(params)
        .then(exist => {
            if(exist){
                throw customException.emailExist()
            }
            return userService.register(params)
        })
        .then(user => {
            this.user = user;
            user.isAdmin = 0;

            let tokenObj = _buildUserTokenGenObj(user);
            let userObj = {
                userId: user._id.toString(),
                IP: ip.address(),
                userObj: tokenObj,
            }
            return redisSession.create(userObj)
        })
        .then(redisSession => {
            return { message :"Registration Successfull" , user: this.user, accessToken: redisSession.token }
        });
}

function login(params) {
    return userService.isEmailExist(params)
        .then(exist => {
            if(!exist){
                throw customException.emailNotExist()
            }
            return userService.login(params)
        })
        .then(user => {
            if(!user){
                throw customException.invalidPassword()
            }
            
            this.user = user;
            user.isAdmin = 0;

            let tokenObj = _buildUserTokenGenObj(user);
            let userObj = {
                userId: user._id.toString(),
                IP: ip.address(),
                userObj: tokenObj,
            }
            return redisSession.create(userObj)
        })
        .then(redisSession => {
            return { message :"Login Successfull" ,user: this.user, accessToken: redisSession.token }
        });
}


function _buildUserTokenGenObj(user) {
    var userObj = {};
    userObj.isAdmin = user.isAdmin;
    userObj.userId = user._id.toString();
    return userObj;
}


module.exports = {
    register,
    login
}