const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dataConfig");

// Định nghĩa Model Shop
const Shop = sequelize.define(
    "Shop",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        imageFileName: {  
            type: DataTypes.STRING,
            allowNull: true,  
        },
    },
    {
        tableName: "shop",
        timestamps: false,
    },
);

module.exports = Shop;