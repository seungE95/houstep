import OrderRepository from "../repositories/order.repository";

class OrderService{
    orderRepository: OrderRepository;

    constructor(){
        this.orderRepository = new OrderRepository;
    }
    orderList = async (startDate:string, endDate:string, orderType:string, customerId:number,pageSize:number, pageNo:number) => {
        return await this.orderRepository.orderList(startDate, endDate, orderType, customerId,pageSize, pageNo);
    
    }

}
export default OrderService;
