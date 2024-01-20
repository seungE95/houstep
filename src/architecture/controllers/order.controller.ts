import { NextFunction, Request, Response } from "express";
import OrderService from "../services/order.service";

class OrderController {
    orderService = new OrderService;

    orderList = async (req: Request, res: Response, next: NextFunction) => {

        try {
            let {startDate, endDate, orderType, customerId, pageSize, pageNo }:any = req.query;
            if(!pageSize || pageSize === null) pageSize = 50;
            if(!pageNo || pageNo === null) pageNo = 1;
            if(!orderType || orderType === null){
                orderType = "all";
            } else if(orderType === 0){
                orderType = "order";
            } else{
                orderType = "refund";
            }
                
            const result = await this.orderService.orderList(startDate, endDate, orderType, customerId, pageSize, pageNo)
    
            res.status(200).json({result})
        } catch (error) {
            next(error);
        }
    }

}
export default OrderController;