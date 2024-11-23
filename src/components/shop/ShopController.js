const ShopModel = require('./shopModel');

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
}

module.exports = new ShopController();
