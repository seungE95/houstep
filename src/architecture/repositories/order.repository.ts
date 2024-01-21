import { Order, User } from "../../db/models/domain/tables";
import { Op } from "sequelize";

class OrderRepository{
    orderList = async (startDate:string, endDate:string, orderType:string, customerId:number, pageSize:number, pageNo:number) => {
        let obj ={};
        let arr:Array<Object> = [];
        if(orderType === "all"){
            const userData = await User.findOne({
                    attributes: ["userName", "userClass"],
                    where: {
                        userId: customerId
                    }
            });

            const orderData = await Order.findAndCountAll({
                attributes: ["orderDate", "orderType", "orderPrice"],
                where: {
                    orderDate: {
                        [Op.between]: [startDate, endDate]
                    },
                    userId: customerId
                },
                raw: true,
                limit: pageSize,
                offset: (pageNo - 1) * pageSize,
                order: [
                    ['orderDate', 'DESC']
                ]
            });
            
            orderData.rows.map(element => {
                obj = {
                    ...element,
                    userData,
                };
                arr.push(obj);
            });
            return arr;
        }else{
            const userData = await User.findOne({
                attributes: ["userName", "userClass"],
                where: {
                    userId: customerId
                }
            });

            const orderData = await Order.findAndCountAll({
                attributes: ["orderDate", "orderType", "orderPrice"],
                where: {
                    orderDate: {
                        [Op.between]: [startDate, endDate]
                    },
                    orderType: orderType,
                    userId: customerId
                },
                raw: true,
                limit: pageSize,
                offset: (pageNo - 1) * pageSize,
                order: [
                    ['orderDate', 'DESC']
                ]
            });
            
            orderData.rows.map(element => {
                obj = {
                    ...element,
                    userData,
                };
                arr.push(obj);
            });
            return arr;
            }
        }
}
export default OrderRepository;