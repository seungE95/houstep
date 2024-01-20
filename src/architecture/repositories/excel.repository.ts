import { Order, User } from "../../db/models/domain/tables";

class ExcelRepository{
    file1Register = async (file1:any) => {
        return await file1.forEach((element: { [x: string]: any; }) => {
             User.create({
                userId: parseInt(element['고객 id']),
                userName: element['고객명'],
                userClass: element['고객등급'],
            })
        });
    }

    file2Register = async (file2:any) => {
        return await file2.forEach((ele: { [x: string]: any; }) => {
            Order.create({
                userId: parseInt(ele['주문고객 id']),
                orderDate: ele['주문일자'],
                orderType: ele['주문타입'],
                orderPrice: ele['주문금액'],
            })
        });
    }

}

export default ExcelRepository;