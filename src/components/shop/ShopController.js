const Shop = require("./shopModel");

class ShopController {
    // [GET] '/shop'
    async index(req, res) {
        try {
            const { category, size } = req.query;
            const products = await Shop.getProducts({ category, size });

            // Truyền dữ liệu vào view
            res.render("shop", { shop: products });
        } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error);
            res.status(500).send("Lỗi Server");
        }
    }

    // [GET] '/shop/search'
    async research(req, res) {
        try {
            const { product_name } = req.query; // Lấy từ khóa tìm kiếm từ query string
            const productData = await Shop.getSearchProducts(product_name);

            if (!productData.length) {
                res.render("404");
            } else {
                res.render("shop", { shop: productData });
            }
        } catch (error) {
            console.error("Lỗi khi tìm kiếm:", error);
            res.status(500).send("Lỗi sever.");
        }
    }
}

module.exports = new ShopController();
