const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../../config/dataConfig");
const ShopModel = require('../shopModel');
const Shop = ShopModel.Shop;

const Product = sequelize.define(
    "product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        product_status: {
            type: DataTypes.ENUM("In Stock", "Out Of Stock"),
            defaultValue: "In Stock",
        },
    },
    {
        tableName: "product", // Tên bảng trong cơ sở dữ liệu
        timestamps: false, // Bỏ qua cột createdAt và updatedAt
    },
);
Product.belongsTo(Shop, { foreignKey: 'id', targetKey: 'id' });
// Thêm các phương thức truy vấn vào lớp ProductModel
class ProductModel {
    /**
     * Truy vấn chi tiết sản phẩm từ bảng product và shop dựa trên id sản phẩm.
     * @param {number} productId - ID của sản phẩm
     * @returns {Object} - Thông tin sản phẩm bao gồm các thuộc tính của cả product và shop
     */
    static async getProductById(productId) {
        try {
            const productIdInt = parseInt(productId, 10);
            
            const product = await Product.findOne({
                where: { id: productIdInt },  // Điều kiện tìm sản phẩm theo ID
                include: [
                    {
                        model: Shop,  // Kết hợp bảng Shop
                        required: true,  // Chỉ lấy kết quả khi có thông tin trong bảng Shop
                    },
                ],
            });

            if (!product) {
                return null;  // Nếu không tìm thấy sản phẩm
            }

            // Trả về toàn bộ thông tin từ bảng Product và Shop
            return product.toJSON();  // Chuyển Sequelize instance thành đối tượng JavaScript
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm kết hợp:", error);
            throw error;
        }
    }
}

module.exports = ProductModel;
