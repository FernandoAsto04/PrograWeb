import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize("ejemplo", "postgres", "Fasto1407", {
    host: "localhost",
    dialect: "postgres"
});