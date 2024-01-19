import SalesRepository from "../repositories/sales.reposiotry";

class SalesService {
    salesRepository:SalesRepository;

    constructor() {
        this.salesRepository = new SalesRepository;
    }
    monthlySales = async () => {
        const result = await this.salesRepository.monthlySales();

        let month:number, year:number;
        //현재 년,월 비교값
        let thisMonth =1, thisYear=2023;
        //매출액, 환불액
        let order = 0, refund = 0;
        //결과값을 넣을 배열
        const arr:any = [];

        result.forEach(element => {
            year = parseInt(element.orderDate.split("-")[0]);
            month = parseInt(element.orderDate.split("-")[1]);
            const num = element.orderPrice.toLocaleString();
            const value = parseInt(num.replace(/,/g, ''), 10);
            let date = year+"-"+month;

            if(thisYear === year){
                if(thisMonth === month){
                    if(element.orderType === "refund"){
                        refund += value;
                    }else{
                        order += value;
                    }
                }else{
                    arr.push({
                        "날짜": date,
                        "주문액": refund+order,
                        "반품액": refund,
                        "매출": order,
                    })
                    thisMonth = month;
                    //초기화
                    refund = 0, order = 0;
                    if(element.orderType === "refund"){
                        refund += value;
                    }else{
                        order += value;
                    }
                }
            }else{
                thisYear = year;
                if(thisMonth === month){
                    if(element.orderType === "refund"){
                        refund += value;
                    }else{
                        order += value;
                    }
                }else{
                    arr.push({
                        "날짜": date,
                        "주문액": refund+order,
                        "반품액": refund,
                        "매출": order,
                    })
                    thisMonth = month;
                    //초기화
                    refund = 0, order = 0;
                    if(element.orderType === "refund"){
                        refund += value;
                    }else{
                        order += value;
                    }
                }
            }
        });
        return arr;
    }

}
export default SalesService;