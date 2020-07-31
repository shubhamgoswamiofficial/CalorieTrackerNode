//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var Exception = require("./model/Exception");
var constants = require("./constant");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

module.exports = {
    completeCustomException: function (errcode, errMsg, error) {
        console.log(errcode, 'errcode', errMsg, error, 'errMsg, error');
        if (error == false)
            return new Exception(errcode, errMsg);
        else
            return new Exception(errcode, errMsg, error);
    },
    intrnlSrvrErr: function (err) {
        return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    unauthorizeAccess: function (err) {
        return new Exception(2, constants.MESSAGES.UNAUTHORIZED_ACCESS_EXCEPTION, err)
    },
    emailExist: function (err) {
        return new Exception(3, constants.MESSAGES.EMAIL_EXIST, err)
    },
    emailNotExist: function (err) {
        return new Exception(4, constants.MESSAGES.EMAIL_NOT_EXIST, err)
    },
    invalidPassword: function (err) {
        return new Exception(5, constants.MESSAGES.INVALID_PASSWORD, err)
    },

};

//========================== Export Module   End ===========================
