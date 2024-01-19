import { Order } from "../../db/models/domain/tables"


class SalesRepository {
    monthlySales = async () => {
        return Order.findAll({
            attributes:["orderDate","orderType","orderPrice"],
        })
    }
}

export default SalesRepository;