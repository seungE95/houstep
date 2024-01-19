import ExcelRepository from "../repositories/excel.repository";
import fs from "fs";
import csvtojson from "csvtojson";

class ExcelService{
    excelRepository:ExcelRepository;

    constructor(){
        this.excelRepository = new ExcelRepository();
    }

    excelRegister = async (file1:string, file2:string) => {
        const rocalFile1 = await fs.promises.readFile(file1, 'utf8');
        const rocalFile2 = await fs.promises.readFile(file2, 'utf8');

        const jsonFile1 = await csvtojson().fromString(rocalFile1);
        const jsonFile2 = await csvtojson().fromString(rocalFile2);
        
        let result1:any, result2:any;
        return{
            result1: await this.excelRepository.file2Register(jsonFile2),
            result2: await this.excelRepository.file1Register(jsonFile1)
        }

    }
}

export default ExcelService;