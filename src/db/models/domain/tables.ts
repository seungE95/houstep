import {
    DataTypes, 
    Model, 
    Association,
    NonAttribute,
    ForeignKey
} from 'sequelize';
import {sequelize} from '../index';
import { UserAttributes } from '../interface/user.interface';
import { OrderAttributes } from '../interface/order.interface';

export class User extends Model<UserAttributes>{
    public readonly userId? : number;
    public userName! : string;
    public userClass! : string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    
    declare order?: NonAttribute<Order[]>;

    public static associations: {
        order: Association<User, Order>;
    };
}

export class Order extends Model<OrderAttributes>{
    public readonly orderId? : number;
    public orderDate! : string;
    public orderType! : string;
    public orderPrice! : string;

    public userId!: ForeignKey<User["userId"]>;
    
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    declare user?: NonAttribute<User[]>;
    
    public static associations: {
        user: Association<Order, User>;
    };
}

User.init(
    {
        userId : {
            type : DataTypes.INTEGER,
            primaryKey: true,
        },
        userName : {
            type : DataTypes.STRING(255),
            allowNull : false
        },
        userClass : {
            type : DataTypes.STRING(50),
            allowNull : false
        }
    },
    {
        modelName : 'User',
        tableName : 'Users',
        sequelize,
        freezeTableName : true,
        timestamps : true,
        updatedAt : 'updateTimestamp'
    }
)

Order.init(
    {
        orderId : {
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderDate : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        orderType : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        orderPrice : {
            type : DataTypes.STRING(255),
            allowNull : false
        },
    },
    {
        modelName : 'Order',
        tableName : 'Orders',
        sequelize,
        freezeTableName : true,
        timestamps : true,
        updatedAt : 'updateTimestamp'
    }
)

User.hasMany(Order, {
    sourceKey: "userId",
    foreignKey : 'userId',
    as: "order",
})

Order.belongsTo(User, { foreignKey: "userId"});