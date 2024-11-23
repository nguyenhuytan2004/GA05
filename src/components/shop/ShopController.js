const Shop = require("./shopModel");

class ShopController {
    // [GET] '/shop'
    async index(req, res) {
        try {
            // Lấy các query parameters từ URL (category là một mảng, size là một mảng)
            let categories = req.query.category || [];
            let sizes = req.query.size || [];

            // Nếu categories hoặc sizes là một chuỗi, chuyển nó thành một mảng
            if (typeof(categories) === 'string') {
                categories = [categories]; // Chuyển chuỗi thành mảng có một phần tử
            }
            if (typeof(sizes) === 'string') {
                sizes = [sizes]; // Chuyển chuỗi thành mảng có một phần tử
            }

            // Khởi tạo câu truy vấn cơ sở dữ liệu
            let query = 'SELECT * FROM shop'; // Câu truy vấn cơ bản
            const conditions = [];

            // Điều kiện cho category
            if (categories.length > 0) {
                conditions.push(`category IN ('${categories.join("', '")}')`);
            }

            // Điều kiện cho assize
            if (sizes.length > 0) {
                conditions.push(`assize IN ('${sizes.join("', '")}')`);
            }

            // Kết hợp các điều kiện
            if (conditions.length > 0) {
                query += ' WHERE ' + conditions.join(' AND ');
            }

            console.log(query);
            // Thực thi câu truy vấn SQL
            const products = await Shop.sequelize.query(query, { type: Shop.sequelize.QueryTypes.SELECT });

            const baseImageUrl = "../../../public/images/products/";
            
            // Xử lý sản phẩm để thêm URL ảnh
            const productData = products.map((product) => {
                const imageFileName = product.imageFileName || ''; 
                product.imageUrl = baseImageUrl + imageFileName;
                return product;
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
