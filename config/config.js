const dotenv = require("dotenv");
dotenv.config({path:".env"})

const config = {
    env: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 9222,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbDialect: process.env.DB_DIALECT,
    aiApiKey : process.env.OPENAI_API_KEY,
    jwtSecret: process.env.JWT_SECRET,
};

module.exports = {config}