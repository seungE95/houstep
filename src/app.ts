import * as dotenv from "dotenv";
import express,{Request, Response, NextFunction} from "express";
import cors from "cors";
import {sequelize} from "./db/models";
import router from "./routers/index";

dotenv.config();

const PORT:number = parseInt(process.env.PORT as string, 10) || 5000;
const HOST:string = process.env.HOST || 'localhost';
const app = express();

app.use(express.json());

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

// 라우터 설정
app.use(router);


// 서버측 에러 핸들링 부분
app.use(
    (
        error: any,
        request: Request,
        response: Response,
        next: NextFunction,
    ): void => {
        if (error.message.includes("Bad Request")) {
            response.status(400).json({ message: error.message });
        } else if (error.message.includes("Not Found")) {
            response.status(404).json({ message: error.message });
        } else {
            response.status(500).json({ message: "Server Error" });
        }
    },
);