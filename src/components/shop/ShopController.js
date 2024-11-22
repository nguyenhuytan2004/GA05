class ShopController {
    // [GET] '/shop'
    index(req, res) {
        res.render("shop");
    }

    // [GET] '/shop/product'
    product(req, res) {
        res.render("product");
    }
}

module.exports = new ShopController();
