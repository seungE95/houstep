import express from "express";
import ExcelController from "../architecture/controllers/excel.controller";
import multer from "multer";
import * as fs from "fs";
import path from "path";

const excelRouter = express.Router();
const excelController = new ExcelController();

//미들웨어 처리 (수정)
const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = path.resolve(__dirname,  "../storage");
            fs.mkdirSync(uploadPath, { recursive: true });
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
});

const upload = multer({ storage: storage}).fields([
    { name: 'file1', maxCount: 1},
    { name: 'file2', maxCount: 1}
])

excelRouter.post("/upload", upload, excelController.excelRegister);

export default excelRouter;