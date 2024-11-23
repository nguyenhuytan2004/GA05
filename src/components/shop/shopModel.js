const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../config/dataConfig");

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
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.ENUM('S', 'M', 'L'), // Khai báo ENUM cho size
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'), // Khai báo ENUM cho rating
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

// Thêm các phương thức truy vấn vào lớp Model
class ShopModel {
    /**
     * Truy vấn danh sách sản phẩm theo các điều kiện category và size
     * @param {Object} queryParams - Tham số truy vấn từ URL
     * @returns {Array} Danh sách sản phẩm
     */

    //Getters
    constructor() {
        this.Shop = Shop;  // Lưu đối tượng Shop vào một thuộc tính
    }

    static get Shop() {
        return Shop;  // Getter cho đối tượng Shop
    }


    static async getProducts({ category = [], size = [] }) {
        try {
            // Xử lý category và size nếu là chuỗi
            if (typeof category === "string") {
                category = [category];
            }
            if (typeof size === "string") {
                size = [size];
            }
    
            // Điều kiện truy vấn
            const whereConditions = {};
            if (category.length > 0) {
                whereConditions.category = category; // Sequelize tự xử lý IN với mảng
            }
            if (size.length > 0) {
                whereConditions.size = size;
            }
    
            // Truy vấn cơ sở dữ liệu
            const products = await Shop.findAll({
                where: whereConditions,
            });
    
            // Thêm URL hình ảnh vào kết quả
            const baseImageUrl = "../../../public/images/products/";
            return products.map((product) => {
                const productData = product.toJSON(); // Chuyển sang object thuần
                productData.imageUrl = baseImageUrl + (productData.imageFileName || '');
                return productData;
            });
        } catch (error) {
            console.error("Lỗi khi truy vấn sản phẩm:", error);
            throw error;
        }
    }
}

module.exports = ShopModel;
