import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("ejemplodemo", "postgres", "12345", {
    host: "localhost",
    dialect: "postgres"
});
















