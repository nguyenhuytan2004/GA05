const Shop = require("./shopModel");

class ShopController {
    // [GET] '/shop'
    async index(req, res) {
        try {
            const products = await Shop.findAll();
            
            const baseImageUrl = "../../../public/images/products/";
            
            const productData = products.map((product) => {
                const productValues = product.dataValues;
                const imageFileName = productValues.imageFileName || ''; 
                productValues.imageUrl = baseImageUrl + imageFileName;
                
                return productValues;
            });

            // Truyền dữ liệu vào view
            res.render("shop", { shop: productData });
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
