const userRouter = require("../components/user/userRoute");
const shopRouter = require("../components/shop/shopRoute");

function route(app) {
    app.get("/product", shopRouter);
    app.get("/login", userRouter);
    app.get("/checkout", userRouter);

    // // dùng riêng xử lý HTTP
    app.get("/register", userRouter);
    // app.post("/register", registerRouter);

    app.get("/cart", userRouter);
    app.use("/", shopRouter);
}

module.exports = route;
