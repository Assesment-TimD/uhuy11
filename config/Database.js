import {Sequelize} from "sequelize";

//192.168.159.130
const db = new Sequelize('brian', 'root', '123', {
    host: '192.168.12.130',
    dialect: 'mysql'
});

export default db;