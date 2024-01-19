import { NextFunction, Request, Response } from "express";
import SalesService from "../services/sales.service";

class SalesController {
    salesService = new SalesService;

    monthlySales = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.salesService.monthlySales();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default SalesController;