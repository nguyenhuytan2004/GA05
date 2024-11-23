const Shop = require("./shopModel");
const { Op } = require("sequelize");

class ShopController {
    // [GET] '/shop'
    async index(req, res) {
        try {
            // Gọi Model để lấy danh sách sản phẩm
            const products = await ShopModel.getProducts(req.query);

            // Truyền dữ liệu vào view
            res.render("shop", { shop: products });
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error);
            res.status(500).send("Lỗi Server");
        }
    }

    // [GET] '/shop/product'
    product(req, res) {
        res.render("product");
    }

    // [GET] '/shop/search'
    async research(req, res) {
        const { product_name } = req.query; // Lấy từ khóa tìm kiếm từ query string
        try {
            const products = await Shop.findAll({
                where: {
                    product_name: {
                        [Op.like]: `%${product_name}%`, // Tìm kiếm sản phẩm chứa từ khóa
                    },
                },
            });

            const baseImageUrl = "../../../public/images/products/";

            const productData = products.map((product) => {
                const productData = product.get({ plain: true });
                productData.imageUrl = baseImageUrl + productData.imageFileName; // Gắn imageUrl

                return productData;
            });

            if (!productData.length) {
                res.render("404");
            } else {
                res.render("shop", { shop: productData });
            }
        } catch (error) {
            console.error("Lỗi khi tìm kiếm:", error);
            res.status(500).send("Có lỗi xảy ra khi tìm kiếm.");
        }
    }
}

module.exports = new ShopController();
