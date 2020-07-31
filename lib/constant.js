const STATUS_CODE = {
	ERROR: 0,
	SUCCESS: 1
}

const ACCOUNT_LEVEL = {
	ADMIN: 1,
	USER: 2
}

const LOGIN_TYPE = {
}

const DB_MODEL_REF = {
	USER: "User",
	MEAL_RECORDS:"MealRecords"
}


const MESSAGES = {
	KEY_CANT_EMPTY: "{{key}} cannot be empty",
	EMAIL_EXIST:"Email already exist!",
	EMAIL_NOT_EXIST:"Email Does Not Exist!",
	INVALID_PASSWORD:"Invalid Email Or Password, Try Again!"
}

// ========================== Export Module Start ==========================
module.exports = Object.freeze({
	STATUS_CODE: STATUS_CODE,
	ACCOUNT_LEVEL: ACCOUNT_LEVEL,
	LOGIN_TYPE: LOGIN_TYPE,
	DB_MODEL_REF: DB_MODEL_REF,
	MESSAGES: MESSAGES,
});
// ========================== Export Module End ============================