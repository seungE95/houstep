import {User} from '../../models/domain/tables';

console.log("======Create Users Table======");

const create_table_users = async() => {
    await User.sync({force : true})
    .then(() => {
        console.log("✅Success Create User Table");
    })
    .catch((err) => {
        console.log("❗️Error in Create User Table : ", err);
    })
}

create_table_users();