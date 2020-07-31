const dbConfig = require('./dbConfig');
const expressConfig = require('./expressConfig');
const path = require('path');
// =================================================================
var cfg = {
        projectName: process.env.PROJECT_NAME,
        environment: process.env.NODE_ENV,
        debug: process.env.DEBUG,
        port: process.env.PORT,
        TAG: process.env.NODE_ENV,
        uploadDir: path.resolve('./uploads'),
        mongo: {
                dbName: process.env.DB_NAME,
                dbUrl: process.env.DB_URL,
                options: {
                        user: process.env.DB_USER,
                        pass: process.env.DB_PASS,
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true
                }
        },
        basicAuth: {
                name: process.env.BASIC_AUTH_USERNAME,
                pass: process.env.BASIC_AUTH_PASS
        },
        redis: {
                server: process.env.REDIS_SERVER,
                port: process.env.REDIS_PORT,
                namespace: process.env.REDIS_NAMESPACE,
                appname: process.env.REDIS_APP_NAME
        },
}

// ========================== Export Module Start ==========================
module.exports = {
        cfg,
        dbConfig,
        expressConfig
}
// ========================== Export Module End ============================