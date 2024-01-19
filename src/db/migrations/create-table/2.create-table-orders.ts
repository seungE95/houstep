import {Order} from '../../models/domain/tables';

console.log("======Create Orders Table======");

const create_table_order = async() => {
    await Order.sync({force : true})
    .then(() => {
        console.log("✅Success Create Orders Table");
    })
    .catch((err) => {
        console.log("❗️Error in Create Orders Table : ", err);
    })
}

create_table_order();