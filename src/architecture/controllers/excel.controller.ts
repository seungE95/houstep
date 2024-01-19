import { NextFunction, Request, Response } from "express";
import ExcelService from "../services/excel.service";



class ExcelController {
    excelService = new ExcelService;

    excelRegister = async (req: Request, res: Response, next: NextFunction) => {
        try {
            //*********** 타입 수정 하기 *******************
            const Files:any = req.files;
            //customer.csv
            const file1:string = Files.file1[0].path;
            //order.csv
            const file2:string = Files.file2[0].path;
            
            //파일이 존재 하지 않을 경우 err Messages
            if(!file1 || !file2) {
                return res.status(400).send("Customer or Order file not found");
            }
            const result = await this.excelService.excelRegister(file1, file2);
            console.log(result);
            return res.status(200).send("DB에 저장이 완료 되었습니다.");

        } catch (error) {
            next(error);
        }
    }
}
export default ExcelController;
