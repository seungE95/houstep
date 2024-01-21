import ExcelRepository from "../repositories/excel.repository";
import fs from "fs";
import csvtojson from "csvtojson";

class ExcelService{
    excelRepository:ExcelRepository;

    constructor(){
        this.excelRepository = new ExcelRepository();
    }

    excelRegister = async (customerFile:string, orderFile:string) => {
        const customerLocal = await fs.promises.readFile(customerFile, 'utf8');
        const orderLocal = await fs.promises.readFile(orderFile, 'utf8');

        const customerJson = await csvtojson().fromString(customerLocal);
        const orderJson = await csvtojson().fromString(orderLocal);
        
        await this.excelRepository.file1Register(customerJson),
        await this.excelRepository.file2Register(orderJson)
        

    }
}

export default ExcelService;