import {
    DataTypes, 
    Model, 
    Association
} from 'sequelize';
import {sequelize} from '../index';
import { UsersAttributes } from '../interface/user.interface';

export class Users extends Model<UsersAttributes>{
    public readonly userId! : number;
    public userName! : string;
    public userClass! : string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    
    public static associations: {
        
    };
}

Users.init(
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
        modelName : 'Users',
        tableName : 'Users',
        sequelize,
        freezeTableName : true,
        timestamps : true,
        updatedAt : 'updateTimestamp'
    }
)