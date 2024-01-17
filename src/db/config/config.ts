import * as dotenv from "dotenv";

dotenv.config();
const env = process.env;

export const config = {
    development : {
        username : process.env.DB_USERNAME || 'root',
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DBNAME || 'houstep',
        host : process.env.DB_HOST || 'localhost',
        port : process.env.DB_PORT || 3306,
        dialect : "mysql"
    }
}