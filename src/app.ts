import * as dotenv from "dotenv";
import express,{Request, Response, NextFunction} from "express";
import cors from "cors";
import sequelize from "./db/models";

dotenv.config();
/**
 * App Variables
 */
const PORT:number = parseInt(process.env.PORT as string, 10) || 5000;
const HOST:string = process.env.HOST || 'localhost';
const app = express();

/**
 *  App Configuration   //middleware
 */
app.use(cors());
app.use(express.json());
app.use((req:Request,res:Response,next:NextFunction) => {
    console.log(`Request Occur! ${req.method}, ${req.url}`);
    next();
})
// 라우터 설정
/**
 * Server Activation
 */
app.listen(PORT,HOST,async () => {
    console.log(`Server Listening on ${HOST}:${PORT}`);

    // //sequelize-db 연결 테스트
     await sequelize.authenticate()
     .then(async () => {
         console.log("connection success");
     })
     .catch((e) => {
         console.log('TT : ', e);
     })
})