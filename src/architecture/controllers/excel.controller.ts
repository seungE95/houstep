import { NextFunction, Request, Response } from "express";
import ExcelService from "../services/excel.service";

class ExcelController {
    excelService = new ExcelService;

    excelRegister = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const Files:any = req.files;

            //파일이 존재 하지 않을 경우 err Messages,
            if(!Object.keys(Files).length){
                throw new Error("Bad Request");
            }
            //customer.csv
            const customerFile:string = Files.file1[0].path;
            //order.csv
            const orderFile:string = Files.file2[0].path;
            
            await this.excelService.excelRegister(customerFile, orderFile);
            
            return res.status(200).json({"message": "DB에 저장이 완료 되었습니다."});

        } catch (error) {
            next(error);
        }
    }
}
export default ExcelController;
