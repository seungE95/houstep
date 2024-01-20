import { Order, User } from "../../db/models/domain/tables";
import { Op } from "sequelize";

class OrderRepository{
    orderList = async (startDate:string, endDate:string, orderType:string, customerId:number,pageSize:number, pageNo:number) => {
        if(orderType === "all"){
            return await Order.findAll({
                attributes: ["orderDate", "orderType", "orderPrice"],
                where: {
                    orderDate: {
                        [Op.between]: [startDate, endDate]
                    },
                    userId: customerId
                },
                limit: pageSize,
                offset: (pageNo - 1) * pageSize,
                include: [
                    {
                        model: User,
                        as: 'users',
                        attributes: ["userName", "userClass"]
                    },
                ],
                order: [
                    ['orderDate', 'DESC']
                ]
            })
        }else{
            return await Order.findAll({
                attributes: ["orderDate", "orderType", "orderPrice"],
                where: {
                    orderDate: {
                        [Op.between]: [startDate, endDate]
                    },
                    orderType: orderType,
                    userId: customerId
                },
                limit: pageSize,
                offset: (pageNo - 1) * pageSize,
                include: [
                    {
                        model: User,
                        as: 'users',
                        attributes: ["userName", "userClass"]
                    }
                ],
                order: [
                    ['orderDate', 'DESC']
                ]
            })
        }
    }
}
export default OrderRepository;