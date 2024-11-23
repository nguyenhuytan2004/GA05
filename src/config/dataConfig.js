const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables from .env file

// Kết nối đến MySQL
const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name from .env
    process.env.DB_USER, // Username from .env
    process.env.DB_PASSWORD, // Password from .env
    {
        host: process.env.DB_HOST, // Host from .env
        dialect: "mysql",
        logging: false,
        port: process.env.DB_PORT, // Port from .env
    },
);

// Kiểm tra kết nối
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Kết nối tới cơ sở dữ liệu thành công");
    } catch (error) {
        console.error("Không thể kết nối đến cơ sở dữ liệu:", error);
    }
};

testConnection();

module.exports = sequelize; // Xuất đối tượng sequelize
